import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "İznik Sabit Elektrik",
  description:
    "İznik Sabit Elektrik; elektrik tesisatı, arıza, bakım ve taahhüt hizmetlerinde uzman kadrosuyla kaliteli ve güvenilir çözümler sunar. Uygun fiyat, hızlı servis, müşteri memnuniyeti önceliğimizdir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
