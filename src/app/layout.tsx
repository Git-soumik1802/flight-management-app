import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flight Management App",
  description: "Flight booking and management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}