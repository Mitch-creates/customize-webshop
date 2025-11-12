import { SignUpForm } from "@/components/account/signUpForm";

export default async function SignUp({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div className="w-full max-w-md space-y-6">
      <SignUpForm />
    </div>
  );
}
