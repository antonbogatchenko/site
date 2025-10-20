import styles from "./page.module.css";
import ImageGallery from "./components/ImageGallery";
import Image from "next/image";

export default function Home() {
  const woodsImages = Array.from(
    { length: 5 },
    (_, i) => `/projects/woods/woods_${i + 1}.jpg`
  );

  return (
    <div className={styles.page}>
      {/* Hero Section */}
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
                and creative content. Available for projects locally and
                globally. Let&apos;s create something amazing together!
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

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            border: "4px outset #cccccc",
            boxShadow: "var(--shadow-chunky)",
            margin: "20px",
          }}
        >
          <h2
            className={styles.sectionTitle}
            style={{
              textAlign: "center",
              marginBottom: "30px",
              background: "var(--gradient-primary)",
              color: "white",
              padding: "15px",
              borderRadius: "8px",
              border: "3px inset #cccccc",
              textShadow: "2px 2px 0px #000000",
            }}
          >
            🎨 MY AWESOME PROJECTS
          </h2>
          <div className={styles.project}>
            <div
              style={{
                background: "var(--gradient-secondary)",
                padding: "15px",
                borderRadius: "8px",
                border: "3px outset #cccccc",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <h3
                className={styles.projectTitle}
                style={{
                  color: "white",
                  textShadow: "2px 2px 0px #000000",
                  margin: 0,
                }}
              >
                🌲 WOODS PROJECT
              </h3>
              <p
                style={{
                  color: "white",
                  margin: "10px 0 0 0",
                  fontWeight: "bold",
                  textShadow: "1px 1px 0px #000000",
                }}
              >
                A Collection of Creative Works
              </p>
            </div>
            <ImageGallery images={woodsImages} altPrefix="Woods project" />
          </div>
        </div>
      </section>
    </div>
  );
}
