import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div
          style={{
            background: "white",
            padding: "28px 18px",
            borderRadius: "12px",
            border: "4px outset #cccccc",
            boxShadow: "var(--shadow-chunky)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: "900px",
            gap: "24px",
            flexWrap: "wrap",
            fontFamily:
              "Montserrat, 'Segoe UI', Verdana, Tahoma, Arial, sans-serif",
          }}
        >
          {/* Profile Image on the side */}
          <div
            style={{
              flex: "0 0 220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "220px",
              width: "220px",
              minWidth: "140px",
              minHeight: "140px",
              background: "var(--card)",
              borderRadius: "50%",
              border: "6px outset #cccccc",
              boxShadow: "var(--shadow-chunky)",
              marginRight: "0px",
            }}
          >
            <Image
              src="/me.jpg"
              alt="Anton Bogatchenko"
              width={200}
              height={200}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
              priority
            />
          </div>
          {/* Info block */}
          <div
            style={{
              flex: "1 1 320px",
              minWidth: "180px",
              fontFamily: "inherit",
            }}
          >
            <h1
              className={styles.title}
              style={{
                fontSize: "clamp(26px, 5vw, 40px)",
                lineHeight: 1.15,
                marginBottom: "14px",
                color: "var(--accent)",
                textAlign: "left",
                fontWeight: 700,
                fontFamily: "inherit",
                letterSpacing: "0.07em",
              }}
            >
              WELCOME TO MY PORTFOLIO!
            </h1>
            <div
              style={{
                background: "var(--gradient-secondary)",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "3px inset #cccccc",
                marginBottom: "12px",
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(2.2em, 6vw, 3.4em)",
                  color: "white",
                  textShadow: "2px 2px 0px #000000",
                  margin: 0,
                  letterSpacing: "0.12em",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                }}
              >
                ANTON BOGATCHENKO
              </h2>
              <p
                style={{
                  margin: "7px 0 0 0",
                  color: "white",
                  fontWeight: 600,
                  textShadow: "1px 1px 0px #000000",
                  fontFamily: "inherit",
                }}
              >
                Multi-Disciplinary Professional
              </p>
            </div>
            <p
              className={styles.description}
              style={{
                fontSize: "15px",
                lineHeight: 1.5,
                marginBottom: "12px",
                color: "var(--foreground)",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Based in Helsinki, Finland. Experienced in hospitality, events,
              and creative content. Available for projects locally and globally.
              Let&apos;s create something amazing together!
            </p>
            <div
              className={styles.contacts}
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                fontFamily: "inherit",
              }}
            >
              <a
                href="mailto:anton@antonbogatchenko.com"
                className="corporate-button"
                style={{ fontSize: "12px" }}
              >
                📧 Email Me
              </a>
              <a
                href="https://instagram.com/antonbogatchenko"
                target="_blank"
                rel="noreferrer"
                className="corporate-button"
                style={{ fontSize: "12px" }}
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
