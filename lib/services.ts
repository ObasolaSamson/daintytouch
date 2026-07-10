export type Service = {
  slug: string;
  name: string;
  description: string;
  priceFrom: string;
  duration?: string;
  note?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "soft-glam",
    name: "Soft Glam",
    description:
      "Natural yet polished glam in soft, nude tones — a subtle look created to enhance your natural beauty.",
    priceFrom: "$120",
  },
  {
    slug: "owambe-glam",
    name: "Owambe Glam",
    description:
      "A more polished, bold, and dramatic look with defined features, full coverage, and bold contouring — designed to intensify your natural beauty.",
    priceFrom: "$150",
  },
  {
    slug: "makeup-gele-soft-glam",
    name: "Makeup & Gele Soft Glam",
    description:
      "Soft glam makeup paired with an expertly tied gele to complete your look from head to toe.",
    priceFrom: "$150",
  },
  {
    slug: "bridal-makeup",
    name: "Bridal Makeup (New York)",
    description:
      "Flawless, long-wearing bridal artistry for your big day, including touch-ups.",
    priceFrom: "$800",
    duration: "4 hrs",
    note: "Hours start counting as soon as makeup starts, including touch-ups.",
  },
  {
    slug: "bridal-train",
    name: "Bridal Train Glam",
    description:
      "Coordinated glam for your bridal train so every member of the party glows together.",
    priceFrom: "$150 each",
  },
  {
    slug: "bridal-groom-parents",
    name: "Bridal / Groom Parents",
    description:
      "Elegant, camera-ready glam for the mothers of the couple.",
    priceFrom: "$250",
  },
  {
    slug: "gele-only",
    name: "Gele Only (Bridal Parent)",
    description:
      "Professional gele tying for a bridal parent — beautifully wrapped to finish the outfit.",
    priceFrom: "$100",
  },
  {
    slug: "special-events",
    name: "Special Events / Birthdays",
    description:
      "Standout glam for birthdays and celebrations, made to help you shine on your day.",
    priceFrom: "$350",
    note: "Excludes extra charges for outfit changes. Additional outfit change is $100 per hour.",
  },
  {
    slug: "photoshoot",
    name: "Photoshoot Makeup / Change of Outfit",
    description:
      "Camera-ready artistry for shoots, with options for outfit changes to capture every look.",
    priceFrom: "From $350",
  },
];

// The exact option labels used in the booking form dropdown.
export const SERVICE_OPTIONS = [
  "Soft Glam",
  "Owambe Glam",
  "Makeup & Gele Soft Glam",
  "Bridal Makeup (New York)",
  "Bridal Train Glam",
  "Bridal / Groom Parents",
  "Gele Only (Bridal Parent)",
  "Special Events / Birthdays",
  "Photoshoot Makeup / Change of Outfit",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
