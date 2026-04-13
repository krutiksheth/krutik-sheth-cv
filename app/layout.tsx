import type { Metadata } from "next";
import { Cormorant, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
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
        className={`${cormorant.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
