import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client.
 *
 * We use the service role key here because inserts happen inside the trusted
 * /api/book route. Never expose the service role key to the browser.
 */
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

export type BookingRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
  notes: string | null;
  created_at: string;
};
