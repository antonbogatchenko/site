import React from "react";
import Link from "next/link";

export const PageHeader: React.FC = () => {
  return (
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
  );
};
