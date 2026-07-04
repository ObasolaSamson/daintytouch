"use client";

import { useState } from "react";
import { SERVICE_OPTIONS } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  service: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function update(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data?.error ?? "Something went wrong. Please try again in a moment."
        );
        return;
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-blush-200 bg-white p-10 text-center shadow-sm">
        <span className="text-5xl">✨</span>
        <h3 className="mt-4 font-serif text-3xl font-bold text-charcoal">
          Request received!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-charcoal/70">
          Thank you for booking with Dainty Touch. A confirmation email is on
          its way, and I&apos;ll be in touch shortly to lock in your
          appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-blush-300 px-6 py-2 font-semibold text-blush-700 transition hover:bg-blush-50"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-blush-400 focus:ring-2 focus:ring-blush-200";
  const labelClass = "mb-1.5 block text-sm font-semibold text-charcoal";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-blush-100 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="date" className={labelClass}>
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={today}
            value={form.date}
            onChange={update}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={update}
            className={inputClass}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>
            Additional Notes{" "}
            <span className="font-normal text-charcoal/50">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={form.notes}
            onChange={update}
            placeholder="Tell me about your event, inspiration, or any questions…"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-blush-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blush-500/30 transition hover:bg-blush-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Booking Request"}
      </button>

      <p className="mt-4 text-center text-xs text-charcoal/50">
        By submitting, you&apos;ll receive a confirmation email. No spam, ever.
      </p>
    </form>
  );
}
