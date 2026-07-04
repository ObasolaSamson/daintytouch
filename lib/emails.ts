import type { BookingInput } from "./validation";

const BRAND = "Dainty Touch";

function formatDate(date: string) {
  try {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
}

const wrap = (title: string, body: string) => `
  <div style="background:#fbf7f2;padding:32px 0;font-family:Helvetica,Arial,sans-serif;color:#2b2320;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #f6d2ca;">
      <div style="background:#d15f47;padding:24px 32px;">
        <h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:0.5px;">${BRAND}</h1>
      </div>
      <div style="padding:32px;">
        <h2 style="margin:0 0 16px;font-size:20px;color:#2b2320;">${title}</h2>
        ${body}
      </div>
      <div style="padding:20px 32px;background:#fdf5f3;color:#9d3925;font-size:12px;">
        ${BRAND} · Professional Makeup Artistry
      </div>
    </div>
  </div>
`;

function detailsTable(booking: BookingInput) {
  const rows: [string, string][] = [
    ["Name", booking.name],
    ["Email", booking.email],
    ["Phone", booking.phone],
    ["Preferred Date", formatDate(booking.date)],
    ["Service", booking.service],
    ["Notes", booking.notes?.trim() ? booking.notes : "—"],
  ];

  return `
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:8px 0;color:#9d3925;font-weight:600;width:140px;vertical-align:top;">${label}</td>
          <td style="padding:8px 0;color:#2b2320;">${value}</td>
        </tr>`
        )
        .join("")}
    </table>
  `;
}

export function clientConfirmationEmail(booking: BookingInput) {
  const body = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Hi ${booking.name.split(" ")[0]}, thank you for your booking request! I've received
      your details and will reach out shortly to confirm your appointment.
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">Here's what you submitted:</p>
    ${detailsTable(booking)}
    <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#6d2d22;">
      Can't wait to make you glow. ✨
    </p>
  `;

  return {
    subject: `We received your booking request — ${BRAND}`,
    html: wrap("Your booking request is in!", body),
  };
}

export function artistNotificationEmail(booking: BookingInput) {
  const body = `
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">
      You have a new booking request. Details below:
    </p>
    ${detailsTable(booking)}
    <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#6d2d22;">
      Reply to <a href="mailto:${booking.email}" style="color:#d15f47;">${booking.email}</a> to confirm.
    </p>
  `;

  return {
    subject: `New booking: ${booking.service} — ${booking.name}`,
    html: wrap("New booking request", body),
  };
}
