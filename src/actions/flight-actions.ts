"use server";

import { createClient } from "@/lib/supabase/server";
import { generatePNR } from "@/lib/utils/generate-pnr";

interface CreateBookingParams {
  userId: string;
  flightId: string;
  seatId: string;
  totalPrice: number;
  passenger: {
    fullName: string;
    passportNo: string;
    nationality: string;
    dob: string;
  };
}

export async function createBooking({
  userId,
  flightId,
  seatId,
  totalPrice,
  passenger,
}: CreateBookingParams) {
  const supabase = await createClient();

  const pnr = generatePNR();

  // Reserve seat using RPC
  const { data: bookingId, error: reserveError } = await supabase.rpc(
    "reserve_seat",
    {
      p_seat_id: seatId,
      p_user_id: userId,
      p_flight_id: flightId,
      p_total_price: totalPrice,
      p_pnr: pnr,
    }
  );

  if (reserveError) {
    console.error("Seat Reservation Error:", reserveError.message);
    throw new Error(reserveError.message);
  }

  // Insert passenger
  const { error: passengerError } = await supabase
    .from("passengers")
    .insert({
      booking_id: bookingId,
      full_name: passenger.fullName,
      passport_no: passenger.passportNo,
      nationality: passenger.nationality,
      dob: passenger.dob,
    });

  if (passengerError) {
    console.error("Passenger Insert Error:", passengerError.message);
    throw new Error(passengerError.message);
  }

  return {
    success: true,
    bookingId,
    pnr,
  };
}

export async function getUserBookings(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("bookings")
    .select(`
      *,
      flights (*),
      seats (*)
    `)
    .eq("user_id", userId)
    .order("booked_at", { ascending: false });

  if (error) {
    console.error("Fetch Bookings Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function cancelBooking(bookingId: string) {
  const supabase = await createClient();

  const { error } = await supabase.rpc("cancel_booking", {
    p_booking_id: bookingId,
  });

  if (error) {
    console.error("Cancel Booking Error:", error.message);
    throw new Error(error.message);
  }

  return {
    success: true,
  };
}

interface RescheduleBookingParams {
  bookingId: string;
  oldFlightId: string;
  newFlightId: string;
  feeCharged: number;
}

export async function rescheduleBooking({
  bookingId,
  oldFlightId,
  newFlightId,
  feeCharged,
}: RescheduleBookingParams) {
  const supabase = await createClient();

  // Insert reschedule record
  const { error: rescheduleError } = await supabase
    .from("reschedules")
    .insert({
      booking_id: bookingId,
      old_flight_id: oldFlightId,
      new_flight_id: newFlightId,
      fee_charged: feeCharged,
    });

  if (rescheduleError) {
    console.error("Reschedule Error:", rescheduleError.message);
    throw new Error(rescheduleError.message);
  }

  // Update booking
  const { error: updateError } = await supabase
    .from("bookings")
    .update({
      flight_id: newFlightId,
      status: "rescheduled",
    })
    .eq("id", bookingId);

  if (updateError) {
    console.error("Booking Update Error:", updateError.message);
    throw new Error(updateError.message);
  }

  return {
    success: true,
  };
}