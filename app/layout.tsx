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
  title: "Krutik Sheth | Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer portfolio focused on Next.js, React, .NET, product delivery, scalable systems, and premium web experiences.",
  keywords: [
    "Krutik Sheth",
    "Senior Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    ".NET Developer",
    "Portfolio Website",
    "TypeScript",
    "Azure",
    "Microservices",
  ],
  openGraph: {
    title: "Krutik Sheth | Senior Full-Stack Developer",
    description:
      "Product-focused engineer building premium full-stack web platforms with Next.js, React, .NET, and scalable backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
