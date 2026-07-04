import BookingForm from "./BookingForm";

export default function BookingSection() {
  return (
    <section id="booking" className="scroll-mt-20 bg-blush-50/60 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-charcoal">
            Book Your Appointment
          </h2>
          <p className="mt-4 text-charcoal/70">
            Fill out the form below and I&apos;ll get back to you to confirm the
            details. Let&apos;s create something beautiful.
          </p>
        </div>
        <div className="mt-12">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
