import type { Metadata } from "next";
import Link from "next/link";
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
              <Link
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
              </Link>
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
