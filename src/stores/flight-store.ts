import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FlightStore {
  selectedFlight: unknown;
  selectedSeat: unknown;

  setSelectedFlight: (flight: unknown) => void;
  setSelectedSeat: (seat: unknown) => void;

  reset: () => void;
}

export const useFlightStore = create<FlightStore>()(
  persist(
    (set) => ({
      selectedFlight: null,
      selectedSeat: null,

      setSelectedFlight: (flight) =>
        set({ selectedFlight: flight }),

      setSelectedSeat: (seat) =>
        set({ selectedSeat: seat }),

      reset: () =>
        set({
          selectedFlight: null,
          selectedSeat: null,
        }),
    }),
    {
      name: "flight-store",
    }
  )
);