"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import {
  getSignUpFormSchema,
  SignUpFormData,
} from "@/lib/zod-schemas/signupFormSchema";
import { Input } from "../ui/input";

export function SignUpForm() {
  const validationMessages = useTranslations("validation");
  const onboardingMessages = useTranslations("onboarding");

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(getSignUpFormSchema(validationMessages)),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    // Send to API route
    console.log(data);
    // const response = await fetch("/api/auth/signup", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    // if (!response.ok) {
    //   // Handle server errors
    // }
  };

  return (
    <form
      className="w-full max-w-md flex flex-col justify-center space-y-6"
      onSubmit={signUpForm.handleSubmit(onSubmit)}
    >
      {/* Next up define form || THEN define api route */}
      <FieldGroup>
        <FieldSet>
          <FieldLegend>{onboardingMessages("becomeAChatati")}</FieldLegend>
          <FieldDescription>
            {onboardingMessages("fillInAllFields")}
          </FieldDescription>
        </FieldSet>
      </FieldGroup>
      <FieldGroup>
        <Controller
          name="firstName"
          control={signUpForm.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="signUp-firstName">First Name</FieldLabel>
              <Input
                {...field}
                id="signUp-firstName"
                aria-invalid={fieldState.invalid}
                placeholder="Please enter your first name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
