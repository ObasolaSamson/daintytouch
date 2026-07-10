export async function GET() {
  return Response.json({
    resend: !!process.env.RESEND_API_KEY,
    artistEmail: !!process.env.ARTIST_EMAIL,
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
  })
}
