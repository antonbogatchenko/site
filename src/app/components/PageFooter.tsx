import React from "react";

export const PageFooter: React.FC = () => {
  return (
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
          © {new Date().getFullYear()} Anton Bogatchenko - All Rights Reserved
        </small>
      </div>
    </footer>
  );
};
