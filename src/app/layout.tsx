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
      <body
        className={`${geistSans.variable} ${geistMono.variable} hero-noise`}
      >
        <div className="hero-bg" />
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "blur(6px)",
            background:
              "linear-gradient(180deg, rgba(10,10,10,.9), rgba(10,10,10,.6))",
            padding: "14px 20px",
            borderBottom: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <Link
              href="/"
              style={{ fontWeight: 700, letterSpacing: "0.16em" }}
              className="neon-link"
            >
              ANTON
            </Link>
            <div style={{ flex: 1 }} />
            <Link href="/about" className="hover-fade neon-link">
              About
            </Link>
            <Link href="/works" className="hover-fade neon-link">
              Works
            </Link>
            <Link href="/contacts" className="hover-fade neon-link">
              Contacts
            </Link>
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
