import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

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
  title: "Vinicius Guterre - Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, Node.js, and PostgreSQL. Building scalable web solutions with modern technologies.",
  keywords: ["Full-Stack Developer", "React", "Node.js", "PostgreSQL", "TypeScript", "Web Development"],
  authors: [{ name: "Vinicius Guterre" }],
  creator: "Vinicius Guterre",
  openGraph: {
    title: "Vinicius Guterre - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Node.js, and PostgreSQL. Building scalable web solutions with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinicius Guterre - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Node.js, and PostgreSQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider initialLanguage="pt-br">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}