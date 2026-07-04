import { z } from "zod";
import { SERVICE_OPTIONS } from "./services";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a valid date."),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "Please choose a service." }),
  }),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
