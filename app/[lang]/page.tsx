import { getDictionary } from "./dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>; // Accept any string, will be validated in getDictionary
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // Will fall back to "en" if unsupported
  return <button>{dict.onboarding.register}</button>;
}
