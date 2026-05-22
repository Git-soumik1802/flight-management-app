import { z } from "zod";

export const searchSchema = z.object({
  origin: z.string().min(2),
  destination: z.string().min(2),
  date: z.string(),
  passengers: z.number().min(1),
});