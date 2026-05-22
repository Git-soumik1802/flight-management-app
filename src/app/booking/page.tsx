"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    passportNo: "",
    nationality: "",
    dob: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("Passenger Details:", formData);

    // API / Server Action Call Here

    router.push("/confirmation");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">
          Complete Your Booking
        </h1>

        <form
          onSubmit={handleBooking}
          className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
        >
          {/* FULL NAME */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter full name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* PASSPORT */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Passport Number
            </label>

            <input
              type="text"
              name="passportNo"
              value={formData.passportNo}
              onChange={handleChange}
              required
              placeholder="Passport number"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* NATIONALITY */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nationality
            </label>

            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              placeholder="Nationality"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold transition hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </main>
  );
}