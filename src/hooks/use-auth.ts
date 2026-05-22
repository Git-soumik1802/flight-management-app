"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

import type { User, Session } from "@supabase/supabase-js";

export default function useAuth() {
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);

      setLoading(false);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (
        _event,
        session: Session | null
      ) => {
        setUser(session?.user ?? null);

        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return {
    user,
    loading,
  };
}