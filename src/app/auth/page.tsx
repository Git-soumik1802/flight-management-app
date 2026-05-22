"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const router = useRouter();

  const supabase = createClient();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const { error } =
        await supabase.auth.signInWithPassword(
          {
            email,
            password,
          }
        );

      if (error) {
        setError(error.message);

        setLoading(false);

        return;
      }

      alert("Login Successful!");

      router.push("/my-bookings");
    } catch {
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <>
      <Header />

      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black px-6 text-white">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-extrabold">
              Welcome Back
            </h1>

            <p className="mt-3 text-lg text-slate-400">
              Access your flight bookings securely.
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition focus:border-blue-500"
                required
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold transition hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-slate-400">
            Demo Login:
          </p>

          <div className="mt-3 rounded-2xl bg-slate-800 p-4 text-center text-sm">
            <p>Email: demo@gmail.com</p>

            <p>Password: 123456</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}