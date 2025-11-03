import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-bar";

export const metadata: Metadata = {
  title: "Learning application",
  description: "A learning application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-polysans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
