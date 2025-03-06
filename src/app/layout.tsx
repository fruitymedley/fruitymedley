import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fruity Medley",
  description: "Software Development by Juniper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
