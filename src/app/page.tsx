"use client";

import Image from "next/image";
import {
  Plane,
  Search,
  MapPin,
  CalendarDays,
  Users,
  RefreshCw,
  ShieldCheck,
  Headphones,
  Armchair,
  Home,
  Briefcase,
} from "lucide-react";

export default function SearchPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      {/* Background Glow */}
      <div className="absolute left-[-200px] top-[-200px] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/10 bg-[#020817]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
              <Plane className="h-5 w-5 rotate-45 text-white" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight">
              Flight
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                App
              </span>
            </h1>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <Home className="h-4 w-4" />
              Home
            </a>

            <a
              href="/search"
              className="flex items-center gap-2 border-b-2 border-blue-500 pb-1 text-sm font-semibold text-blue-400"
            >
              <Search className="h-4 w-4" />
              Search
            </a>

            <a
              href="/my-bookings"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <Briefcase className="h-4 w-4" />
              My Bookings
            </a>

            <div className="h-6 w-[1px] bg-white/20" />

            <a
              href="/auth"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:scale-105"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl">
              <Plane className="h-4 w-4 rotate-45" />
              Find Your Perfect Flight
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Search{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Flights
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl">
              Book flights with realtime seat selection, rescheduling, and
              smart travel management.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop"
                alt="Flight"
                width={900}
                height={600}
                className="h-[280px] w-full object-cover md:h-[360px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Search Card */}
        <div className="relative mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl md:p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* Origin */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                Origin
              </label>

              <div className="rounded-2xl border border-white/10 bg-[#020617]/80 p-5">
                <h3 className="text-2xl font-bold">Delhi</h3>
                <p className="mt-1 text-sm text-slate-400">DEL</p>
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                Destination
              </label>

              <div className="rounded-2xl border border-white/10 bg-[#020617]/80 p-5">
                <h3 className="text-2xl font-bold">Mumbai</h3>
                <p className="mt-1 text-sm text-slate-400">BOM</p>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <CalendarDays className="h-4 w-4 text-purple-400" />
                Travel Date
              </label>

              <input
                type="date"
                className="h-16 w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 text-sm outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Passenger */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Users className="h-4 w-4 text-pink-400" />
                Passengers
              </label>

              <select className="h-16 w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 text-sm outline-none transition focus:border-blue-500">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-8 flex justify-center">
            <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 px-10 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/20 transition duration-300 hover:scale-105">
              <Search className="h-5 w-5 transition group-hover:rotate-12" />
              Search Available Flights
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Armchair,
              title: "Realtime Seats",
              desc: "Choose your preferred seats in realtime",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: RefreshCw,
              title: "Easy Reschedule",
              desc: "Reschedule flights hassle-free",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: ShieldCheck,
              title: "Secure Booking",
              desc: "100% secure and trusted payments",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "We're here anytime, anywhere",
              color: "from-orange-500 to-yellow-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} shadow-xl`}
              >
                <item.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-4">
          {[
            ["500+", "Daily Flights"],
            ["50+", "Destinations"],
            ["10K+", "Happy Customers"],
            ["99.9%", "Safe & Secure"],
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h2 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-black text-transparent md:text-4xl">
                {item[0]}
              </h2>

              <p className="mt-2 text-sm text-slate-400 md:text-base">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}