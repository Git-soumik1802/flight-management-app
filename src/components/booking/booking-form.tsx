"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    passportNo: "",
    nationality: "",
    dob: "",
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Passport Number
        </label>

        <input
          type="text"
          placeholder="Passport Number"
          value={formData.passportNo}
          onChange={(e) =>
            setFormData({
              ...formData,
              passportNo: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Nationality
        </label>

        <input
          type="text"
          placeholder="Nationality"
          value={formData.nationality}
          onChange={(e) =>
            setFormData({
              ...formData,
              nationality: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Date of Birth
        </label>

        <input
          type="date"
          value={formData.dob}
          onChange={(e) =>
            setFormData({
              ...formData,
              dob: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700"
      >
        Confirm Booking
      </button>
    </form>
  );
}