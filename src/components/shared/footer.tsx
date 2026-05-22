export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        {/* BRAND */}
        <h2 className="text-2xl font-bold text-blue-400">
          FlightApp
        </h2>

        {/* COPYRIGHT */}
        <p className="text-center text-slate-400">
          © 2026 Flight Management System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}