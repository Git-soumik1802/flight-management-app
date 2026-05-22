-- Enable UUID Extension
create extension if not exists "pgcrypto";

---------------------------------------------------
-- FLIGHTS TABLE
---------------------------------------------------

create table flights (
  id uuid primary key default gen_random_uuid(),

  flight_no text not null,

  origin text not null,

  destination text not null,

  departs_at timestamptz not null,

  arrives_at timestamptz not null,

  aircraft_type text not null,

  status text default 'scheduled',

  base_price numeric not null,

  created_at timestamptz default now()
);

---------------------------------------------------
-- SEATS TABLE
---------------------------------------------------

create table seats (
  id uuid primary key default gen_random_uuid(),

  flight_id uuid references flights(id) on delete cascade,

  seat_number text not null,

  class text check (
    class in ('economy', 'business', 'first')
  ),

  is_available boolean default true,

  extra_fee numeric default 0
);

---------------------------------------------------
-- BOOKINGS TABLE
---------------------------------------------------

create table bookings (
  id uuid primary key default gen_random_uuid(),

  user_id uuid references auth.users(id),

  flight_id uuid references flights(id),

  seat_id uuid references seats(id),

  status text default 'confirmed',

  booked_at timestamptz default now(),

  total_price numeric not null,

  pnr_code text unique not null
);

---------------------------------------------------
-- PASSENGERS TABLE
---------------------------------------------------

create table passengers (
  id uuid primary key default gen_random_uuid(),

  booking_id uuid references bookings(id)
  on delete cascade,

  full_name text not null,

  passport_no text not null,

  nationality text not null,

  dob date not null
);

---------------------------------------------------
-- RESCHEDULES TABLE
---------------------------------------------------

create table reschedules (
  id uuid primary key default gen_random_uuid(),

  booking_id uuid references bookings(id),

  old_flight_id uuid references flights(id),

  new_flight_id uuid references flights(id),

  requested_at timestamptz default now(),

  fee_charged numeric default 0
);

---------------------------------------------------
-- ENABLE ROW LEVEL SECURITY
---------------------------------------------------

alter table bookings enable row level security;

alter table passengers enable row level security;

alter table reschedules enable row level security;

---------------------------------------------------
-- BOOKINGS RLS POLICIES
---------------------------------------------------

create policy "Users can view own bookings"
on bookings
for select
using (auth.uid() = user_id);

create policy "Users can insert own bookings"
on bookings
for insert
with check (auth.uid() = user_id);

create policy "Users can update own bookings"
on bookings
for update
using (auth.uid() = user_id);

---------------------------------------------------
-- PASSENGERS RLS POLICIES
---------------------------------------------------

create policy "Users can view own passengers"
on passengers
for select
using (
  booking_id in (
    select id from bookings
    where user_id = auth.uid()
  )
);

---------------------------------------------------
-- RESCHEDULE RLS POLICIES
---------------------------------------------------

create policy "Users can view own reschedules"
on reschedules
for select
using (
  booking_id in (
    select id from bookings
    where user_id = auth.uid()
  )
);

---------------------------------------------------
-- SEAT RESERVATION RPC FUNCTION
---------------------------------------------------

create or replace function reserve_seat(
  p_seat_id uuid,
  p_user_id uuid,
  p_flight_id uuid,
  p_total_price numeric,
  p_pnr text
)

returns uuid

language plpgsql

as $$

declare
  booking_id uuid;
  seat_available boolean;

begin

  select is_available
  into seat_available
  from seats
  where id = p_seat_id
  for update;

  if seat_available = false then
    raise exception 'Seat already booked';
  end if;

  update seats
  set is_available = false
  where id = p_seat_id;

  insert into bookings (
    user_id,
    flight_id,
    seat_id,
    total_price,
    pnr_code
  )

  values (
    p_user_id,
    p_flight_id,
    p_seat_id,
    p_total_price,
    p_pnr
  )

  returning id into booking_id;

  return booking_id;

end;

$$;

---------------------------------------------------
-- CANCEL BOOKING RPC
---------------------------------------------------

create or replace function cancel_booking(
  p_booking_id uuid
)

returns void

language plpgsql

as $$

declare
  v_seat uuid;

begin

  select seat_id
  into v_seat
  from bookings
  where id = p_booking_id;

  update bookings
  set status = 'cancelled'
  where id = p_booking_id;

  update seats
  set is_available = true
  where id = v_seat;

end;

$$;

---------------------------------------------------
-- PREVENT LATE CANCELLATIONS
---------------------------------------------------

create or replace function prevent_late_cancellation()

returns trigger

language plpgsql

as $$

declare
  departure_time timestamptz;

begin

  select departs_at
  into departure_time
  from flights
  where id = old.flight_id;

  if departure_time - now() < interval '2 hours' then
    raise exception
    'Cannot cancel within 2 hours of departure';
  end if;

  return new;

end;

$$;

---------------------------------------------------
-- CANCELLATION TRIGGER
---------------------------------------------------

create trigger cancellation_check

before update on bookings

for each row

when (new.status = 'cancelled')

execute function prevent_late_cancellation();