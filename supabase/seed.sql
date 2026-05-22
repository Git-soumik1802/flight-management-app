---------------------------------------------------
-- FLIGHTS SEED DATA
---------------------------------------------------

insert into flights (
  id,
  flight_no,
  origin,
  destination,
  departs_at,
  arrives_at,
  aircraft_type,
  status,
  base_price
)

values

(
  gen_random_uuid(),
  'AI-202',
  'Delhi',
  'Mumbai',
  now() + interval '1 day',
  now() + interval '1 day 2 hours',
  'Airbus A320',
  'scheduled',
  5500
),

(
  gen_random_uuid(),
  'IN-404',
  'Kolkata',
  'Bangalore',
  now() + interval '2 days',
  now() + interval '2 days 3 hours',
  'Boeing 737',
  'scheduled',
  7200
),

(
  gen_random_uuid(),
  '6E-777',
  'Chennai',
  'Hyderabad',
  now() + interval '3 days',
  now() + interval '3 days 1 hour 30 minutes',
  'Airbus A321',
  'scheduled',
  4300
),

(
  gen_random_uuid(),
  'UK-909',
  'Pune',
  'Goa',
  now() + interval '4 days',
  now() + interval '4 days 1 hour',
  'ATR 72',
  'scheduled',
  3500
),

(
  gen_random_uuid(),
  'AI-303',
  'Delhi',
  'Mumbai',
  now() + interval '5 days',
  now() + interval '5 days 2 hours',
  'Airbus A320',
  'scheduled',
  6000
),

(
  gen_random_uuid(),
  'IN-505',
  'Kolkata',
  'Bangalore',
  now() + interval '6 days',
  now() + interval '6 days 3 hours',
  'Boeing 737 MAX',
  'scheduled',
  7600
),

(
  gen_random_uuid(),
  '6E-888',
  'Chennai',
  'Hyderabad',
  now() + interval '7 days',
  now() + interval '7 days 1 hour 40 minutes',
  'Airbus A321',
  'scheduled',
  4500
),

(
  gen_random_uuid(),
  'UK-808',
  'Pune',
  'Goa',
  now() + interval '8 days',
  now() + interval '8 days 1 hour',
  'ATR 72',
  'scheduled',
  3800
);

---------------------------------------------------
-- SEATS SEED DATA
---------------------------------------------------

insert into seats (
  flight_id,
  seat_number,
  class,
  is_available,
  extra_fee
)

select
  flights.id,

  'A' || seat_num,

  case
    when seat_num <= 2 then 'first'
    when seat_num <= 5 then 'business'
    else 'economy'
  end,

  true,

  case
    when seat_num <= 2 then 5000
    when seat_num <= 5 then 2500
    else 0
  end

from flights,

generate_series(1, 20) as seat_num;

---------------------------------------------------
-- SAMPLE BOOKED SEATS
---------------------------------------------------

update seats
set is_available = false
where seat_number in ('A1', 'A2', 'A10');

---------------------------------------------------
-- TEST USER NOTE
---------------------------------------------------

-- Create test user manually in Supabase Auth:
--
-- Email: testuser@example.com
-- Password: Test@123
--
-- Then use that user's UUID for testing bookings.