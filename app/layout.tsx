import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import GoogleTagManager from "@/lib/GoogleTagManager";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CIPTA TEKNIK AC",
  description: "Service AC Profesional di batam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-10857947855" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="AW-10857947855" />
    </html>
  );
}
