import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AboutBand />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}

function AboutBand() {
  return (
    <section id="about" className="border-y border-blush-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        {[
          {
            stat: "14+ yrs",
            label: "Professional experience across weddings and editorials",
          },
          {
            stat: "200+",
            label: "Happy clients who felt like the best version of themselves",
          },
          {
            stat: "100%",
            label: "Cruelty-free, skin-loving products for every look",
          },
        ].map((item) => (
          <div key={item.stat} className="text-center">
            <p className="font-serif text-4xl font-bold text-blush-500">
              {item.stat}
            </p>
            <p className="mt-2 text-sm text-charcoal/70">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
