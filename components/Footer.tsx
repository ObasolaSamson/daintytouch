import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/social";

export default function Footer() {
  return (
    <footer className="border-t border-blush-100 bg-blush-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-charcoal/70 sm:flex-row">
        <p className="font-display text-2xl font-semibold tracking-wide text-blush-700">
          Dainty Touch
        </p>

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Dainty Touch on Instagram"
            className="text-charcoal/70 transition hover:text-blush-600"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Dainty Touch on WhatsApp"
            className="text-charcoal/70 transition hover:text-blush-600"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Email Dainty Touch"
            className="text-charcoal/70 transition hover:text-blush-600"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Dainty Touch. All rights reserved.</p>
        <Link href="/book" className="font-semibold text-blush-600 hover:underline">
          Book an appointment →
        </Link>
      </div>
    </footer>
  );
}
