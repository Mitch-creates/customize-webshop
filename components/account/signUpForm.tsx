"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CtaButton } from "../buttons/ctaButton";
import { signUpSchema, type SignUpFormData } from "@/lib/reusableZodSchemas";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

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
    </form>
  );
}
