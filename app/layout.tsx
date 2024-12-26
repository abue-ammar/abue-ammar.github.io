import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const MiSans = localFont({
  src: [
    {
      path: "./fonts/MiSansLatin-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/MiSansLatin-Demibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MiSansLatin-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: "Abue Ammar",
  description: "The website and portfolio of Abue Ammar.",
};

export const viewport: Viewport = {
  themeColor: "#fff",
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MiSans.className} m-auto max-w-[80ch] px-8 py-20 font-normal text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
