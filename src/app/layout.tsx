import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layouts/Footer";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cemilan Kita",
  description: "Website untuk mencari cemilan yang enak dan lezat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.variable)}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
