import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/social";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blush-100 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-3xl font-semibold tracking-wide text-blush-700"
        >
          Dainty Touch
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-charcoal/80 sm:flex">
          <Link href="/#services" className="transition hover:text-blush-600">
            Services
          </Link>
          <Link href="/#work" className="transition hover:text-blush-600">
            My Work
          </Link>
          <Link href="/#about" className="transition hover:text-blush-600">
            About
          </Link>

          <div className="flex items-center gap-3">
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

          <Link
            href="/book"
            className="rounded-full bg-blush-500 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-blush-600"
          >
            Book Now
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
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
          <Link
            href="/book"
            className="rounded-full bg-blush-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Book
          </Link>
        </div>
      </nav>
    </header>
  );
}
