import { SignUpForm } from "@/components/account/signUpForm";

export default async function SignUp() {
  return (
    <div className="min-h-screen flex justify-center items-start p-4">
      <div className="w-full pt-8 block justify-center items-center max-w-md space-y-6 border-4 p-6 rounded-lg">
        <SignUpForm />
      </div>
    </div>
  );
}
