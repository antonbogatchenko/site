import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header
          style={{ padding: "16px 20px", borderBottom: "1px solid #eee" }}
        >
          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/" style={{ fontWeight: 600 }}>
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/works">Works</Link>
            <Link href="/contacts">Contacts</Link>
          </nav>
        </header>
        {children}
        <footer
          style={{
            padding: "24px 20px",
            borderTop: "1px solid #eee",
            marginTop: 40,
          }}
        >
          <small>© {new Date().getFullYear()} Anton Bogatchenko</small>
        </footer>
      </body>
    </html>
  );
}
