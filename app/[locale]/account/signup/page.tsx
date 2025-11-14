import { SignUpForm } from "@/components/account/signUpForm";

export default async function SignUp() {
  return (
    <div className="w-full pt-8 block justify-center items-center max-w-md space-y-6 border-4 shadow-card-foreground p-6 rounded-lg">
      <SignUpForm />
    </div>
  );
}
