export interface Booking {
  id: string;
  user_id: string;
  flight_id: string;
  seat_id: string;
  status: string;
  booked_at: string;
  total_price: number;
  pnr_code: string;
}