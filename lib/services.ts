export type Service = {
  slug: string;
  name: string;
  description: string;
  priceFrom: string;
  duration: string;
};

export const SERVICES: Service[] = [
  {
    slug: "bridal",
    name: "Bridal Makeup",
    description:
      "Timeless, long-wearing looks for your big day. Includes a pre-wedding trial to perfect every detail.",
    priceFrom: "From $350",
    duration: "2–3 hrs",
  },
  {
    slug: "editorial",
    name: "Editorial / Photoshoot",
    description:
      "Camera-ready artistry for campaigns, lookbooks, and creative shoots. Bold or clean, always intentional.",
    priceFrom: "From $250",
    duration: "1.5–2 hrs",
  },
  {
    slug: "special-occasion",
    name: "Special Occasion",
    description:
      "Glam for galas, birthdays, proms, and celebrations. Look and feel like the best version of you.",
    priceFrom: "From $150",
    duration: "1 hr",
  },
  {
    slug: "lessons",
    name: "Lessons / Tutorials",
    description:
      "One-on-one sessions to master your everyday routine, tailored to your features and lifestyle.",
    priceFrom: "From $120",
    duration: "1.5 hrs",
  },
];

// The exact option labels used in the booking form dropdown.
export const SERVICE_OPTIONS = [
  "Bridal Makeup",
  "Editorial / Photoshoot",
  "Special Occasion",
  "Lessons / Tutorials",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
