interface BookingSummaryProps {
  flightNo: string;
  route: string;
  departure: string;
  arrival: string;
  seat: string;
  price: number;
}

export default function BookingSummary({
  flightNo,
  route,
  departure,
  arrival,
  seat,
  price,
}: BookingSummaryProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Booking Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-400">
            Flight
          </span>

          <span className="font-semibold">
            {flightNo}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Route
          </span>

          <span className="font-semibold">
            {route}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Departure
          </span>

          <span className="font-semibold">
            {departure}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Arrival
          </span>

          <span className="font-semibold">
            {arrival}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Seat
          </span>

          <span className="font-semibold">
            {seat}
          </span>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-medium">
              Total Price
            </span>

            <span className="text-2xl font-bold text-blue-400">
              ₹{price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}