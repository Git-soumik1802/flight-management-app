"# flight-management-app" 
# ✈️ Flight Management App
<img width="1920" height="1080" alt="Screenshot (332)" src="https://github.com/user-attachments/assets/a10a8a70-e4b1-45cc-8273-80c076daa176" />

A modern Flight Booking & Management Progressive Web App (PWA) built with:

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase
- Zustand
- React Hook Form
- Zod
- PWA Support

---

# 🚀 Features

## ✅ Authentication
- Login with Supabase Auth
- Secure session handling
- Protected routes

## ✅ Flight Search
- Search flights by:
  - Origin
  - Destination
  - Date
  - Passenger count

## ✅ Booking System
- Book flights
- View booking summary
- Manage reservations

## ✅ Seat Selection
- Interactive seat map
- Live seat status
- Real-time seat updates

## ✅ My Bookings
- View all bookings
- Cancel booking
- Reschedule booking

## ✅ Progressive Web App (PWA)
- Installable app
- Offline support
- Fast loading

## ✅ Modern UI
- Fully responsive
- Dark premium theme
- Mobile friendly

---

# 📁 Project Structure

```bash
src/
│
├── actions/
│   ├── booking-actions.ts
│   └── flight-actions.ts
│
├── app/
│   ├── auth/
│   │   └── page.tsx
│   │
│   ├── booking/
│   │   └── page.tsx
│   │
│   ├── confirmation/
│   │   └── page.tsx
│   │
│   ├── my-bookings/
│   │   └── page.tsx
│   │
│   ├── offline/
│   │   └── page.tsx
│   │
│   ├── search/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── booking/
│   │   ├── booking-form.tsx
│   │   └── booking-summary.tsx
│   │
│   ├── flight/
│   │   ├── flight-card.tsx
│   │   └── flight-search-form.tsx
│   │
│   ├── seatmap/
│   │   ├── seat-item.tsx
│   │   └── seat-map.tsx
│   │
│   ├── shared/
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   └── loader.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       └── modal.tsx
│
├── constants/
│   ├── routes.ts
│   └── seat-types.ts
│
├── hooks/
│   ├── use-auth.ts
│   └── use-realtime-seats.ts
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   │
│   ├── utils/
│   │   ├── cn.ts
│   │   └── generate-pnr.ts
│   │
│   └── validations/
│       ├── booking-schema.ts
│       └── search-schema.ts
│
├── stores/
│   ├── flight-store.ts
│   └── user-store.ts
│
├── types/
│   ├── booking.ts
│   ├── flight.ts
│   ├── seat.ts
│   └── user.ts
│
└── supabase/
    ├── migrations/
    │   └── 001_initial_schema.sql
    │
    └── seed.sql
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
```

---

## 2️⃣ Go To Project Folder

```bash
cd flight-management-app
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 📦 Required Packages

```bash
npm install @supabase/supabase-js @supabase/ssr zustand next-pwa react-hook-form zod @hookform/resolvers lucide-react clsx tailwind-merge sonner
```

---

# 🔐 Environment Variables

Create:

```bash
.env.local
```

Add:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

# 🛠 Supabase Setup

## 1️⃣ Create Supabase Project

Open:

https://supabase.com/dashboard

Create new project.

---

## 2️⃣ Get API Keys

Go to:

```txt
Project Settings → API
```

Copy:

- Project URL
- anon public key

Paste inside:

```env
.env.local
```

---

## 3️⃣ Create Authentication User

Go to:

```txt
Authentication → Users → Add User
```

Create:

```txt
Email: demo@gmail.com
Password: 123456
```

---

## 4️⃣ Run Database Migration

Open SQL Editor in Supabase.

Run:

```sql
supabase/migrations/001_initial_schema.sql
```

---

## 5️⃣ Seed Database

Run:

```sql
supabase/seed.sql
```

---

# ▶️ Run Project

## Development Mode

```bash
npm run dev
```

---

# 🌐 Application Routes

| Route | Description |
|------|------|
| `/` | Home Page |
| `/auth` | Login Page |
| `/search` | Search Flights |
| `/booking` | Booking Page |
| `/confirmation` | Booking Confirmation |
| `/my-bookings` | Manage Bookings |
| `/offline` | Offline PWA Page |

---

# 🧠 State Management

Using:

```txt
Zustand
```

Stores:

- flight-store.ts
- user-store.ts

---

# 📋 Form Validation

Using:

- React Hook Form
- Zod

Validation files:

```txt
lib/validations/
```

---

# 🎨 UI Stack

- Tailwind CSS
- Lucide Icons
- Responsive Design
- Modern Dark Theme

---

# 📱 PWA Support

Features:

- Install app on mobile
- Offline support
- Service worker
- Cached pages

---

# 🔥 Main Technologies

| Technology | Usage |
|---|---|
| Next.js | Frontend Framework |
| TypeScript | Type Safety |
| Supabase | Backend & Auth |
| Zustand | State Management |
| Tailwind CSS | Styling |
| Zod | Validation |
| React Hook Form | Forms |
| next-pwa | PWA Support |

---

# 🛡️ Authentication Flow

1. User logs in
2. Supabase verifies credentials
3. Session stored securely
4. Redirect to My Bookings page

---

# 🧩 Future Improvements

- Payment Gateway
- Flight API Integration
- Real-time Notifications
- Admin Dashboard
- E-ticket PDF Download
- QR Boarding Pass
- Email Notifications

---

# 👨‍💻 Author

## Soumik Nandi

- MERN Stack Developer
- Next.js Developer
- TypeScript Enthusiast

GitHub:

```txt
https://github.com/Git-soumik1802
```

LinkedIn:

```txt
https://linkedin.com/in/soumik-nandi-b48a0922
```

---

# 📄 License

This project is for educational and internship assignment purposes.

---

# ⭐ If You Like This Project

Give it a star on GitHub ⭐
