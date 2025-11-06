import { getDictionary } from "../../dictionaries";

export default async function SignUp({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <div className="w-full max-w-md space-y-6"></div>;
}
