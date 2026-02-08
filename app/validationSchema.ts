import { z } from "zod";

export const validationSchema = z.object({
  title: z
    .string({ message: "Title is required" })
    .min(1, "Title is required")
    .max(255, "Title must be at most 255 characters"),
  description: z
    .string({ message: "Description is required" })
    .min(1, "Description is required"),
});
