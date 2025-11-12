import { getDictionary } from "../dictionaries";

export default async function Content({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <div>Welcome to the Learning Application</div>;
}
