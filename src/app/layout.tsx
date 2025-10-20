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
      <body>
        <header
          style={{
            background: "var(--gradient-primary)",
            padding: "10px 20px",
            borderBottom: "4px solid #cccccc",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div
              style={{
                background: "var(--gradient-secondary)",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "3px outset #cccccc",
                boxShadow: "var(--shadow-chunky)",
              }}
            >
              <a
                href="/"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "white",
                  textShadow: "2px 2px 0px #000000",
                  textTransform: "uppercase",
                }}
              >
                ANTON BOGATCHENKO
              </a>
            </div>
            <div style={{ flex: 1 }} />
            <a
              href="#projects"
              className="corporate-button"
              style={{ fontSize: "12px" }}
            >
              View Projects
            </a>
          </nav>
        </header>
        {children}
        <footer
          style={{
            background: "var(--gradient-primary)",
            padding: "20px",
            borderTop: "4px solid #cccccc",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "3px outset #cccccc",
              boxShadow: "var(--shadow-chunky)",
              display: "inline-block",
            }}
          >
            <small
              style={{
                color: "var(--foreground)",
                fontWeight: "bold",
                textShadow: "1px 1px 0px #cccccc",
              }}
            >
              © {new Date().getFullYear()} Anton Bogatchenko - All Rights
              Reserved
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
