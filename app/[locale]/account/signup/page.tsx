import { SignUpForm } from "@/components/account/signUpForm";

export default async function SignUp() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Welcome text */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-md space-y-4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Become a Chatati
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Practice a language. Or practice another language in exchange for
            your language.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gray-50">
        <div className="w-full lg:max-w-2xl md:max-w-xl max-w-md">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
