import { SignUpForm } from "@/components/account/signUpForm";

export default async function SignUp() {
  return (
    <div className="min-h-screen flex justify-center items-start p-4">
      <div className="w-full pt-8 block justify-center items-center sm:max-w-2xl space-y-6 p-6">
        <SignUpForm />
      </div>
    </div>
  );
}
