"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FlightCard from "@/components/flight/flight-card";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function SearchPage() {
  const router = useRouter();

  const [searched, setSearched] = useState(false);

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    passengers: 1,
  });

  const flights = [
    {
      id: 1,
      flightNo: "AI-202",
      origin: "Delhi",
      destination: "Mumbai",
      departure: "08:00 AM",
      arrival: "10:00 AM",
      price: 5500,
    },
    {
      id: 2,
      flightNo: "IN-404",
      origin: "Kolkata",
      destination: "Bangalore",
      departure: "01:00 PM",
      arrival: "04:00 PM",
      price: 7200,
    },
    {
      id: 3,
      flightNo: "6E-777",
      origin: "Chennai",
      destination: "Hyderabad",
      departure: "06:30 PM",
      arrival: "08:00 PM",
      price: 4300,
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-black text-white">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              Search Flights
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Book flights with realtime seat selection,
              rescheduling, and smart travel management.
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* ORIGIN */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Origin
                </label>

                <input
                  type="text"
                  placeholder="Delhi"
                  value={formData.origin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      origin: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* DESTINATION */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Destination
                </label>

                <input
                  type="text"
                  placeholder="Mumbai"
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      destination: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Travel Date
                </label>

                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              {/* PASSENGERS */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Passengers
                </label>

                <input
                  type="number"
                  min={1}
                  value={formData.passengers}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passengers: Number(e.target.value),
                    })
                  }
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setSearched(true)}
                className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold shadow-lg transition hover:scale-105 hover:bg-blue-700"
              >
                Search Available Flights
              </button>
            </div>
          </div>

          {/* RESULTS */}
          {searched && (
            <div className="mt-14 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">
                  Available Flights
                </h2>

                <p className="text-slate-400">
                  {flights.length} flights found
                </p>
              </div>

              {flights.map((flight) => (
                <div
                  key={flight.id}
                  onClick={() => router.push("/booking")}
                  className="cursor-pointer transition hover:scale-[1.01]"
                >
                  <FlightCard
                    flightNo={flight.flightNo}
                    origin={flight.origin}
                    destination={flight.destination}
                    departure={flight.departure}
                    arrival={flight.arrival}
                    price={flight.price}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}