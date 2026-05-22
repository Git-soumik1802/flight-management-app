import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2),
  passportNo: z.string().min(5),
  nationality: z.string().min(2),
  dob: z.string(),
});