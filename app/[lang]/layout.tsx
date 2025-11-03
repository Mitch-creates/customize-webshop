import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/nav-bar";
import { getDictionary } from "./dictionaries";

export const metadata: Metadata = {
  title: "Learning application",
  description: "A learning application built with Next.js",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="font-polysans">
        <Navbar dict={dict} />
        {children}
      </body>
    </html>
  );
}
