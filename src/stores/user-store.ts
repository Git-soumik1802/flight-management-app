import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  user: unknown;
  session: unknown;

  setUser: (user: unknown) => void;
  setSession: (session: unknown) => void;

  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      session: null,

      setUser: (user) => set({ user }),

      setSession: (session) =>
        set({ session }),

      logout: () =>
        set({
          user: null,
          session: null,
        }),
    }),
    {
      name: "user-store",
    }
  )
);