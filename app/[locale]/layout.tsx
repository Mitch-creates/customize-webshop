import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/nav-bar";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Learning application",
  description: "A learning application built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  return (
    <html>
      <body className="font-polysans">
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
