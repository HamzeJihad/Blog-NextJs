import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Descrição da página",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        Header
      </header>
      <body>{children}</body>

      <footer>footer</footer>
    </html>
  );
}
