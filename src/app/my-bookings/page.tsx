"use client";

import { useState } from "react";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

import {
  Plane,
  MapPin,
  CalendarDays,
  Trash2,
  RefreshCw,
} from "lucide-react";

interface Booking {
  id: number;
  flight: string;
  from: string;
  to: string;
  seat: string;
  date: string;
  status: "Confirmed" | "Rescheduled";
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      flight: "AI-202",
      from: "Delhi",
      to: "Mumbai",
      seat: "12A",
      date: "22 May 2026",
      status: "Confirmed",
    },
    {
      id: 2,
      flight: "IN-404",
      from: "Kolkata",
      to: "Bangalore",
      seat: "7C",
      date: "25 May 2026",
      status: "Rescheduled",
    },
  ]);

  const handleCancel = (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to cancel?"
    );

    if (!confirmDelete) return;

    setBookings((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleReschedule = (id: number) => {
    setBookings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Rescheduled",
            }
          : item
      )
    );

    alert("Flight Rescheduled Successfully");
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#020817] text-white">
        
        {/* HERO */}
        <section className="border-b border-slate-800 bg-gradient-to-r from-blue-950/40 via-slate-950 to-cyan-950/30">
          
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
            
            <div>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                My Bookings
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-slate-400 md:text-xl">
                View, manage, reschedule and
                cancel your airline bookings with
                a premium real-time experience.
              </p>
            </div>

            {/* STATS */}
            <div className="flex gap-5">
              
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-8 py-6 backdrop-blur-xl">
                <p className="text-sm text-slate-400">
                  Total Flights
                </p>

                <h2 className="mt-2 text-4xl font-black text-blue-400">
                  {bookings.length}
                </h2>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-8 py-6 backdrop-blur-xl">
                <p className="text-sm text-slate-400">
                  Active Trips
                </p>

                <h2 className="mt-2 text-4xl font-black text-cyan-400">
                  {bookings.length}
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKINGS */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          
          <div className="space-y-8">
            
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="group rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-[#071120] to-slate-950 p-8 shadow-2xl transition duration-500 hover:border-blue-500/30 hover:shadow-blue-500/10"
              >
                
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                  
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    
                    {/* TOP */}
                    <div className="flex flex-wrap items-center gap-4">
                      
                      <div className="rounded-2xl bg-blue-500/10 px-5 py-2 text-2xl font-black text-blue-400">
                        {booking.flight}
                      </div>

                      <div
                        className={`rounded-full px-4 py-2 text-sm font-bold ${
                          booking.status ===
                          "Confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {booking.status}
                      </div>
                    </div>

                    {/* ROUTE */}
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-7 w-7 text-blue-400" />

                        <h2 className="text-3xl font-bold">
                          {booking.from}
                        </h2>
                      </div>

                      <div className="rounded-full bg-slate-800 p-4">
                        <Plane className="h-6 w-6 rotate-90 text-slate-400" />
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="h-7 w-7 text-cyan-400" />

                        <h2 className="text-3xl font-bold">
                          {booking.to}
                        </h2>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="mt-8 flex flex-wrap gap-10 text-slate-300">
                      
                      <div>
                        <p className="text-sm text-slate-500">
                          Seat Number
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                          {booking.seat}
                        </h3>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Departure Date
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-xl font-semibold">
                          <CalendarDays className="h-5 w-5 text-blue-400" />

                          {booking.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                    
                    <button
                      onClick={() =>
                        handleReschedule(
                          booking.id
                        )
                      }
                      className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-lg font-bold text-black shadow-lg transition duration-300 hover:scale-105 hover:shadow-yellow-500/40"
                    >
                      <RefreshCw className="h-5 w-5" />

                      Reschedule
                    </button>

                    <button
                      onClick={() =>
                        handleCancel(booking.id)
                      }
                      className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-pink-600 px-8 py-4 text-lg font-bold shadow-lg transition duration-300 hover:scale-105 hover:shadow-red-500/40"
                    >
                      <Trash2 className="h-5 w-5" />

                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* EMPTY STATE */}
            {bookings.length === 0 && (
              <div className="rounded-[32px] border border-slate-800 bg-slate-900/60 p-20 text-center">
                
                <Plane className="mx-auto mb-6 h-20 w-20 text-blue-500" />

                <h2 className="text-4xl font-black">
                  No Bookings Available
                </h2>

                <p className="mt-4 text-lg text-slate-400">
                  Your booked flights will appear
                  here.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}