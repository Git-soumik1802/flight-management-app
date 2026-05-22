"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

interface UseRealtimeSeatsProps {
  flightId: string;
  onSeatUpdate: (payload: unknown) => void;
}

export default function useRealtimeSeats({
  flightId,
  onSeatUpdate,
}: UseRealtimeSeatsProps) {
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel(`seats-${flightId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "seats",
          filter: `flight_id=eq.${flightId}`,
        },
        (payload: unknown) => {
          onSeatUpdate(payload);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [flightId, onSeatUpdate, supabase]);

  return null;
}