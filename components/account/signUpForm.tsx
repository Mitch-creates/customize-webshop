"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { signUpSchema, type SignUpFormData } from "@/lib/reusableZodSchemas";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "../ui/field";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const t = useTranslations("onboarding");

  const onSubmit = async (data: SignUpFormData) => {
    // Send to API route
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Handle server errors
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Next up define form || THEN define api route */}
      <div className="w-full max-w-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>{t("becomeAChatati")}</FieldLegend>
              <FieldDescription>{t("fillInAllFields")}</FieldDescription>
            </FieldSet>
          </FieldGroup>
        </form>
      </div>
    </form>
  );
}
