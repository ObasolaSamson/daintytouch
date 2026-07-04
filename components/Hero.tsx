import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush-200/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blush-100 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-block rounded-full bg-blush-100 px-4 py-1 text-sm font-medium text-blush-700">
            Professional Makeup Artistry
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-charcoal sm:text-6xl">
            Makeup that makes you{" "}
            <span className="text-blush-500">glow</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
            From bridal elegance to editorial edge, I create looks tailored to
            you — flawless, long-lasting, and unmistakably you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-blush-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blush-500/30 transition hover:bg-blush-600"
            >
              Book Now
            </a>
            <Link
              href="/#services"
              className="rounded-full border border-blush-300 px-8 py-3 font-semibold text-blush-700 transition hover:bg-blush-50"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-blush-100 bg-gradient-to-br from-blush-100 via-cream to-blush-200 shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="font-serif text-7xl text-blush-400">✦</span>
              <p className="font-display text-4xl font-semibold tracking-wide text-blush-700">
                Dainty Touch
              </p>
              <p className="text-sm text-charcoal/60">
                Trusted by 200+ happy clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
