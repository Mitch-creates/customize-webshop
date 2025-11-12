export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>; // How does this work => [locale] is a dynamic route parameter, Next.js provides it as a promise. Meaning that when somebody visits /en/account/signup, locale will be "en".
}) {
  const { locale } = await params;
  return <button>Sign up</button>;
}
