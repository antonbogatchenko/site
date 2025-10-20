import styles from "./page.module.css";
import ImageGallery from "./components/ImageGallery";

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
              padding: "30px",
              borderRadius: "12px",
              border: "4px outset #cccccc",
              boxShadow: "var(--shadow-chunky)",
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            <h1
              className={styles.title}
              style={{
                fontSize: "var(--font-size-hero)",
                lineHeight: 1.2,
                marginBottom: "20px",
                color: "var(--accent)",
              }}
            >
              WELCOME TO MY PORTFOLIO!
            </h1>
            <div
              style={{
                background: "var(--gradient-secondary)",
                padding: "15px",
                borderRadius: "8px",
                border: "3px inset #cccccc",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5em",
                  color: "white",
                  textShadow: "2px 2px 0px #000000",
                  margin: 0,
                }}
              >
                ANTON BOGATCHENKO
              </h2>
              <p
                style={{
                  margin: "10px 0 0 0",
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "1px 1px 0px #000000",
                }}
              >
                Multi-Disciplinary Professional
              </p>
            </div>
            <p
              className={styles.description}
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                marginBottom: "20px",
                color: "var(--foreground)",
              }}
            >
              Based in Helsinki, Finland. Experienced in hospitality, events,
              and creative content. Available for projects locally and globally.
              Let's create something amazing together!
            </p>
            <div
              className={styles.contacts}
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                flexWrap: "wrap",
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
