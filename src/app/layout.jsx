import React from "react";

export const metadata = {
  title: "API: Plataforma de Ensino",
  description: "Projeto do curso de Fullstack Development da Tera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
