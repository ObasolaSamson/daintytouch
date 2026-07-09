import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { bookingSchema } from "@/lib/validation";
import {
  artistNotificationEmail,
  clientConfirmationEmail,
} from "@/lib/emails";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const parsed = bookingSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Validation failed.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const booking = parsed.data;
    const notes = booking.notes?.trim() ? booking.notes.trim() : null;

    // 1. Save the booking to Supabase.
    try {
      const supabase = getSupabaseAdmin();
      const { error } = await supabase.from("bookings").insert({
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        date: booking.date,
        service: booking.service,
        notes,
      });

      if (error) {
        console.error("Supabase insert error:", error.message);
        return NextResponse.json(
          {
            ok: false,
            error: "Could not save your booking. Please try again.",
          },
          { status: 500 }
        );
      }
    } catch (err) {
      console.error("Supabase config error:", err);
      return NextResponse.json(
        { ok: false, error: "Booking service is not configured." },
        { status: 500 }
      );
    }

    // 2. Send confirmation (to client) + notification (to artist) via Resend.
    const apiKey = process.env.RESEND_API_KEY;
    const artistEmail = process.env.ARTIST_EMAIL;
    const fromEmail = "bookings@daintytouchbeauty.com";

    if (apiKey && artistEmail) {
      try {
        const resend = new Resend(apiKey);
        const clientEmail = clientConfirmationEmail(booking);
        const artistEmailContent = artistNotificationEmail(booking);

        await Promise.all([
          resend.emails.send({
            from: fromEmail,
            to: booking.email,
            subject: clientEmail.subject,
            html: clientEmail.html,
          }),
          resend.emails.send({
            from: fromEmail,
            to: artistEmail,
            subject: artistEmailContent.subject,
            html: artistEmailContent.html,
          }),
        ]);
      } catch (err) {
        // The booking is already saved; don't fail the request over email.
        console.error("Resend email error:", err);
      }
    } else {
      console.warn(
        "Resend not configured (RESEND_API_KEY / ARTIST_EMAIL). Skipping emails."
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking error:", error);
    return Response.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
