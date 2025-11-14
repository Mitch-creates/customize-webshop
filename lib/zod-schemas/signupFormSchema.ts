import { z } from "zod";

// Since we can't use useTranslation hook outside of a React component, we defined this function to be able to keep the schema out of our components for clean code purposes and reusability. As we'll need both the schema for client validation and server validation.

export function getSignUpFormSchema(t?: (key: string) => string) {
  return z
    .object({
      firstName: z.string().min(1, {
        message: t ? t("firstNameInvalid") : "First name is required",
      }),
      lastName: z.string().min(1, {
        message: t ? t("lastNameInvalid") : "Last name is required",
      }),
      email: z.email({ message: t ? t("emailInvalid") : "Email is required" }),
      password: z
        .string()
        .min(8, {
          message: t
            ? t("passwordMinLength")
            : "Password must be at least 8 characters long.",
        })
        .regex(/[A-Z]/, {
          message: t
            ? t("passwordUppercase")
            : "Password must contain at least one uppercase letter.",
        })
        .regex(/[0-9]/, {
          message: t
            ? t("passwordNumber")
            : "Password must contain at least one number.",
        }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t ? t("confirmPasswordMatch") : "Passwords do not match.",
      path: ["confirmPassword"],
    });
}

export type SignUpFormData = z.infer<
  Awaited<ReturnType<typeof getSignUpFormSchema>>
>;
