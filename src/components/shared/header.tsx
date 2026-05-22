import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-blue-400"
        >
          FlightApp
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/search"
            className="text-slate-300 hover:text-white"
          >
            Search
          </Link>

          <Link
            href="/my-bookings"
            className="text-slate-300 hover:text-white"
          >
            My Bookings
          </Link>

          <Link
            href="/auth"
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}