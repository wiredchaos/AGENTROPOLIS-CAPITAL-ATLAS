import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capital Atlas by AGENTROPOLIS",
  description: "Every jurisdiction. Every opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050608] text-zinc-100">{children}</body>
    </html>
  );
}
