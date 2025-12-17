import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saumith Devarasetty | Academic",
  description: "Academic Portfolio of Saumith Devarasetty, MS AI Student at NEU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
