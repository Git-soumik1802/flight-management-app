interface FlightCardProps {
  flightNo: string;
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  price: number;
}

export default function FlightCard({
  flightNo,
  origin,
  destination,
  departure,
  arrival,
  price,
}: FlightCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition hover:border-blue-500">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
              {flightNo}
            </div>

            <span className="text-sm text-green-400">
              Available
            </span>
          </div>

          <h2 className="text-3xl font-bold">
            {origin}
            <span className="mx-3 text-blue-400">
              →
            </span>
            {destination}
          </h2>

          <div className="mt-5 flex gap-10">
            <div>
              <p className="text-sm text-slate-400">
                Departure
              </p>

              <h3 className="text-xl font-semibold">
                {departure}
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Arrival
              </p>

              <h3 className="text-xl font-semibold">
                {arrival}
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-left lg:text-right">
          <p className="text-sm text-slate-400">
            Starting From
          </p>

          <h2 className="mt-2 text-5xl font-extrabold text-blue-400">
            ₹{price}
          </h2>

          <button className="mt-5 rounded-2xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
            Select Flight
          </button>
        </div>
      </div>
    </div>
  );
}