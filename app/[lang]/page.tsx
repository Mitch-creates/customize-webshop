import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>; // How does this work => [lang] is a dynamic route parameter, Next.js provides it as a promise. Meaning that when somebody visits /en/account/signup, lang will be "en".
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // Will fall back to "en" if unsupported
  return <button>{dict.onboarding.signUp}</button>;
}
