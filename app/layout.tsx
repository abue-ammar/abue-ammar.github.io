import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Providers from "./Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abue Ammar",
  description: "Abue Ammar's Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
