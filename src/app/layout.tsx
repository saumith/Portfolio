import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import Inter and JetBrains Mono
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saumith Devarasetty | Agentic AI Architect",
  description: "Portfolio of Saumith Devarasetty - AI & MLOps Engineer specializing in Agentic AI and Scalable Cloud Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
