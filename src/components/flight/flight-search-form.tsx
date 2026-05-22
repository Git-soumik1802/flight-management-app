"use client";

import { useState } from "react";

export default function FlightSearchForm() {
  const [searchData, setSearchData] = useState({
    origin: "",
    destination: "",
    date: "",
    passengers: 1,
  });

  return (
    <form className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:grid-cols-2">
      <input
        type="text"
        placeholder="Origin"
        value={searchData.origin}
        onChange={(e) =>
          setSearchData({
            ...searchData,
            origin: e.target.value,
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
      />

      <input
        type="text"
        placeholder="Destination"
        value={searchData.destination}
        onChange={(e) =>
          setSearchData({
            ...searchData,
            destination: e.target.value,
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
      />

      <input
        type="date"
        value={searchData.date}
        onChange={(e) =>
          setSearchData({
            ...searchData,
            date: e.target.value,
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
      />

      <input
        type="number"
        min={1}
        value={searchData.passengers}
        onChange={(e) =>
          setSearchData({
            ...searchData,
            passengers: Number(e.target.value),
          })
        }
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3"
      />

      <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
        Search Flights
      </button>
    </form>
  );
}