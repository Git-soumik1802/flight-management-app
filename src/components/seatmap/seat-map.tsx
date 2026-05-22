"use client";

import { useState } from "react";
import SeatItem from "./seat-item";

const seats = [
  {
    id: 1,
    seatNumber: "1A",
    isAvailable: true,
    seatClass: "first",
  },
  {
    id: 2,
    seatNumber: "1B",
    isAvailable: false,
    seatClass: "first",
  },
  {
    id: 3,
    seatNumber: "2A",
    isAvailable: true,
    seatClass: "business",
  },
  {
    id: 4,
    seatNumber: "2B",
    isAvailable: true,
    seatClass: "business",
  },
  {
    id: 5,
    seatNumber: "10A",
    isAvailable: true,
    seatClass: "economy",
  },
  {
    id: 6,
    seatNumber: "10B",
    isAvailable: false,
    seatClass: "economy",
  },
];

export default function SeatMap() {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(
    null
  );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-green-600"></div>
          <span className="text-sm text-slate-300">
            Economy
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-yellow-500"></div>
          <span className="text-sm text-slate-300">
            Business
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-purple-600"></div>
          <span className="text-sm text-slate-300">
            First
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-blue-600"></div>
          <span className="text-sm text-slate-300">
            Selected
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-gray-700"></div>
          <span className="text-sm text-slate-300">
            Occupied
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {seats.map((seat) => (
          <SeatItem
            key={seat.id}
            seatNumber={seat.seatNumber}
            isAvailable={seat.isAvailable}
            isSelected={selectedSeat === seat.seatNumber}
            seatClass={
              seat.seatClass as
                | "economy"
                | "business"
                | "first"
            }
            onSelect={() =>
              setSelectedSeat(seat.seatNumber)
            }
          />
        ))}
      </div>

      {selectedSeat && (
        <div className="mt-6 rounded-xl bg-blue-600/20 p-4 text-blue-400">
          Selected Seat:{" "}
          <span className="font-semibold">
            {selectedSeat}
          </span>
        </div>
      )}
    </div>
  );
}