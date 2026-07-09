import { SERVICES } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-bold text-charcoal">
          Services
        </h2>
        <p className="mt-4 text-charcoal/70">
          Every appointment starts with a conversation. Choose the experience
          that fits your moment.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.slug}
            className="group rounded-2xl border border-blush-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blush-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif text-2xl font-semibold text-charcoal">
                {service.name}
              </h3>
              <span className="whitespace-nowrap rounded-full bg-blush-50 px-3 py-1 text-sm font-semibold text-blush-600">
                {service.priceFrom}
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-charcoal/70">
              {service.description}
            </p>
            {service.note && (
              <p className="mt-4 text-sm italic text-charcoal/50">
                {service.note}
              </p>
            )}
            {service.duration && (
              <p className="mt-6 text-sm font-medium uppercase tracking-wide text-blush-400">
                Duration · {service.duration}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
