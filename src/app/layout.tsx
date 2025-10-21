import type { Metadata } from "next";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anton Bogatchenko – Portfolio",
  description: "About, Works, and Contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
