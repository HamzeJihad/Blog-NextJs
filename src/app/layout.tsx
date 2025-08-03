import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: 'The blog',
    template: '%s | The Blog',
  },  description: "Descrição da página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />

          {children}

          <footer>
            <p className="text-6xl font-bold text-center py-8">Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
