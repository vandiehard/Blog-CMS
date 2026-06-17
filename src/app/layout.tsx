import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ree-Cycle — Reimagining Waste. Rebuilding Indonesia.",
  description: "Indonesia's #1 environmental solutions company. Leading in waste management infrastructure, advanced waste-sorting technology, and state-of-the-art recycling processes.",
  keywords: ["recycling", "waste management", "environmental", "Indonesia", "sustainability", "green technology"],
  openGraph: {
    title: "Ree-Cycle — Reimagining Waste. Rebuilding Indonesia.",
    description: "Indonesia's #1 environmental solutions company.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-[family-name:var(--font-body)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
