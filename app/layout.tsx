import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import Providers from "./Providers";
import "./globals.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Abue Ammar",
  description: "Abue Ammar's Portfolio.",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
