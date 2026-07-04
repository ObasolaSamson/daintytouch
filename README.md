# Dainty Touch — Makeup Artist Booking Site

A polished booking website for a professional makeup artist, built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Supabase** (bookings storage), and **Resend** (transactional email). Ready to deploy on **Vercel**.

## Features

- **Home page** with a hero, animated services list, a "My Work" portfolio gallery with lightbox, an about band, and a `Book Now` button that smooth-scrolls to the booking form.
- **Social links** (Instagram + WhatsApp) in the navbar and footer.
- **Dedicated booking page** (`/book`) with the same reusable form.
- **Booking form**: Full Name, Email, Phone, Preferred Date (date picker), Service dropdown (Bridal Makeup, Editorial / Photoshoot, Special Occasion, Lessons / Tutorials), optional Additional Notes, and a submit button.
- **On submit** the `/api/book` route:
  1. Saves the booking to the Supabase `bookings` table.
  2. Sends **two emails** via Resend — a confirmation to the client and a new-booking notification to the artist.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in your keys
npm run dev
```

Visit http://localhost:3000.

## Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-side only) |
| `RESEND_API_KEY` | Resend API key |
| `BOOKING_FROM_EMAIL` | Verified "from" address in Resend |
| `ARTIST_EMAIL` | Where the artist receives notifications |

> Emails are optional in dev: if the Resend variables are missing, the booking is still saved and the API responds successfully (it just skips sending).

## Database setup

In the Supabase SQL editor, run [`supabase/schema.sql`](./supabase/schema.sql). It creates the `bookings` table with columns: `id`, `name`, `email`, `phone`, `date`, `service`, `notes`, `created_at`, and enables Row Level Security.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add the five environment variables above in **Project Settings → Environment Variables**.
4. Deploy.

## Project structure

```
app/
  api/book/route.ts   # POST: validate → Supabase insert → send 2 emails
  book/page.tsx       # dedicated booking page
  page.tsx            # home page
  layout.tsx          # fonts + metadata
components/            # Navbar, Hero, Services, BookingForm, etc.
lib/
  services.ts         # service definitions + dropdown options
  supabase.ts         # server Supabase client
  validation.ts       # zod schema shared by the form/API
  emails.ts           # Resend email templates
supabase/schema.sql   # bookings table
```
