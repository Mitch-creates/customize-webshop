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
  const formMessages = useTranslations("form");

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
                  <FieldLabel htmlFor="signUp-firstName">
                    {onboardingMessages("firstName")}
                  </FieldLabel>
                  <FieldDescription>
                    {formMessages("firstNameDescription")}
                  </FieldDescription>
                  <Input
                    {...field}
                    id="signUp-firstName"
                    aria-invalid={fieldState.invalid}
                    placeholder={formMessages("firstNamePlaceholder")}
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
                  <FieldLabel htmlFor="signUp-lastName">
                    {onboardingMessages("lastName")}
                  </FieldLabel>
                  <FieldDescription>
                    {formMessages("lastNameDescription")}
                  </FieldDescription>
                  <Input
                    {...field}
                    id="signUp-lastName"
                    aria-invalid={fieldState.invalid}
                    placeholder={formMessages("lastNamePlaceholder")}
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
                  <FieldLabel htmlFor="signUp-email">
                    {onboardingMessages("emailAddress")}
                  </FieldLabel>
                  <FieldDescription>
                    {formMessages("emailDescription")}
                  </FieldDescription>
                  <Input
                    {...field}
                    id="signUp-email"
                    aria-invalid={fieldState.invalid}
                    placeholder={formMessages("emailPlaceholder")}
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
                  <FieldLabel htmlFor="signUp-password">
                    {onboardingMessages("password")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="signUp-password"
                    aria-invalid={fieldState.invalid}
                    placeholder={formMessages("passwordPlaceholder")}
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
                    {onboardingMessages("confirmPassword")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="signUp-confirmPassword"
                    aria-invalid={fieldState.invalid}
                    placeholder={formMessages("confirmPasswordPlaceholder")}
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
            {signUpForm.formState.isSubmitting
              ? formMessages("submitting")
              : onboardingMessages("signUp")}
          </CtaButton>
        </Field>
      </CardFooter>
    </Card>
  );
}
