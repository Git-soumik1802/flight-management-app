export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          You Are Offline
        </h1>

        <p className="mt-4 text-slate-400">
          Please check your internet connection.
        </p>
      </div>
    </main>
  );
}