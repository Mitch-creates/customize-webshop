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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import RegularButton from "../regular-button";
import CtaButton from "../cta-button";

export function SignUpForm() {
  const validationMessages = useTranslations("validation");
  const onboardingMessages = useTranslations("onboarding");

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(getSignUpFormSchema(validationMessages)),
    mode: "onBlur",
    reValidateMode: "onChange",
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
    <Card className="w-full sm:max-w-lg md:max-w-2xl border-2 border-black shadow-[4px_4px_0_0_black]">
      <CardContent className="p-4 sm:p-6">
        <form
          id="signUpForm"
          className="w-full flex flex-col justify-center space-y-4"
          onSubmit={signUpForm.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="firstName"
              control={signUpForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signUp-firstName">First Name</FieldLabel>
                  <FieldDescription>
                    Your first name will be visible to other Chatati's
                  </FieldDescription>
                  <Input
                    {...field}
                    id="signUp-firstName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter your first name"
                    className="placeholder:opacity-0 focus:placeholder:opacity-100 transition-opacity"
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
                  <FieldDescription>
                    Only the first letter of your last name will be visible to
                    other Chatati's
                  </FieldDescription>
                  <Input
                    {...field}
                    id="signUp-lastName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter your last name"
                    className="placeholder:opacity-0 focus:placeholder:opacity-100 transition-opacity"
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
                  <FieldDescription>
                    Other Chatati's do NOT see your email address. This
                    information is only shared when matched.
                  </FieldDescription>
                  <Input
                    {...field}
                    id="signUp-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter your email"
                    className="placeholder:opacity-0 focus:placeholder:opacity-100 transition-opacity"
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
                    className="placeholder:opacity-0 focus:placeholder:opacity-100 transition-opacity"
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
                    className="placeholder:opacity-0 focus:placeholder:opacity-100 transition-opacity"
                  />
                  {fieldState.invalid &&
                    (fieldState.isTouched ||
                      signUpForm.formState.isSubmitted) && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <CtaButton
            type="submit"
            form="signUpForm"
            disabled={signUpForm.formState.isSubmitting}
            fullWidth="w-full"
          >
            Sign up
          </CtaButton>
        </Field>
      </CardFooter>
    </Card>
  );
}
