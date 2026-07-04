-- Run this in the Supabase SQL editor to create the bookings table.

create extension if not exists "pgcrypto";

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  date date not null,
  service text not null,
  notes text,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security. The app writes using the service role key,
-- which bypasses RLS, so no permissive insert policy is needed for the
-- public (anon) role. This keeps the table locked down by default.
alter table public.bookings enable row level security;

create index if not exists bookings_created_at_idx
  on public.bookings (created_at desc);
