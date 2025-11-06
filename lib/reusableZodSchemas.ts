// This file was created to not repeat code since both server side validation & client side validation for ZOD use the same schema.

import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, "Please provide a valid first name"),
    lastName: z.string().min(1, "Please provide a valid last name"),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain uppercase letter")
      .regex(/[0-9]/, "Must contain number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// This infers the TypeScript type from the Zod schema. Which means we only have to maintain one source of truth for our form data structure & validation.
export type SignUpFormData = z.infer<typeof signUpSchema>;
