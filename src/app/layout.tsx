import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
          <Footer></Footer>
        </Container>
      </body>
    </html>
  );
}
