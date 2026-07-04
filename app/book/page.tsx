import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book an Appointment — Dainty Touch",
  description:
    "Request your makeup appointment with Dainty Touch. Bridal, editorial, special occasion, and lessons.",
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <nav className="text-sm text-charcoal/50">
          <Link href="/" className="hover:text-blush-600">
            Home
          </Link>{" "}
          / <span className="text-charcoal/80">Book</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h1 className="font-serif text-4xl font-bold text-charcoal sm:text-5xl">
              Let&apos;s book your glow.
            </h1>
            <p className="mt-4 text-lg text-charcoal/70">
              Share a few details and I&apos;ll follow up to confirm your
              appointment. You&apos;ll get a confirmation email right away.
            </p>

            <ul className="mt-8 space-y-4">
              {SERVICES.map((service) => (
                <li key={service.slug} className="flex items-start gap-3">
                  <span className="mt-1 text-blush-400">✦</span>
                  <div>
                    <p className="font-semibold text-charcoal">
                      {service.name}{" "}
                      <span className="font-normal text-blush-500">
                        · {service.priceFrom}
                      </span>
                    </p>
                    <p className="text-sm text-charcoal/60">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="booking" className="scroll-mt-24">
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
