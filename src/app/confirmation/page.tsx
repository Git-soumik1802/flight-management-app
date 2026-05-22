import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function ConfirmationPage() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black px-6 py-20 text-white">
        <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 text-5xl text-green-400">
              ✓
            </div>

            <h1 className="mt-6 text-5xl font-extrabold text-green-400">
              Booking Confirmed
            </h1>

            <p className="mt-4 text-slate-400">
              Your ticket has been booked successfully.
            </p>
          </div>

          <div className="mt-10 space-y-5 rounded-3xl bg-slate-950 p-8">
            <div className="flex justify-between">
              <span className="text-slate-400">
                PNR Code
              </span>

              <span className="font-bold">
                AB12CD
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Flight
              </span>

              <span className="font-bold">
                AI-202
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Seat
              </span>

              <span className="font-bold">
                12A
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Status
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-1 text-green-400">
                Confirmed
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}