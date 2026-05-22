"use server";

import { createClient } from "@/lib/supabase/server";

interface SearchFlightsParams {
  origin: string;
  destination: string;
  date: string;
}

export async function searchFlights({
  origin,
  destination,
  date,
}: SearchFlightsParams) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("flights")
    .select("*")
    .eq("origin", origin)
    .eq("destination", destination)
    .gte("departs_at", `${date}T00:00:00`)
    .lte("departs_at", `${date}T23:59:59`)
    .order("departs_at", { ascending: true });

  if (error) {
    console.error("Flight Search Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getFlightById(flightId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("flights")
    .select("*")
    .eq("id", flightId)
    .single();

  if (error) {
    console.error("Get Flight Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getFlightSeats(flightId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("seats")
    .select("*")
    .eq("flight_id", flightId)
    .order("seat_number");

  if (error) {
    console.error("Seat Fetch Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}