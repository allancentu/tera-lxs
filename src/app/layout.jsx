import React from 'react';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {children}
    </html>
  );
}