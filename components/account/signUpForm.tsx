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
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Personalization</CardTitle>
        <CardDescription>
          Customize your experience by telling us more about yourself.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="signUpForm"
          className="w-full max-w-md flex flex-col justify-center space-y-6"
          onSubmit={signUpForm.handleSubmit(onSubmit)}
        >
          {/* Next up define form || THEN define api route */}
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="lastName"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signUp-lastName">Last Name</FieldLabel>
                  <Input
                    {...field}
                    id="signUp-lastName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter your last name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="email"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signUp-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="signUp-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter your email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="password"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signUp-password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="signUp-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter your password"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="confirmPassword"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signUp-confirmPassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="signUp-confirmPassword"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please confirm your password"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
