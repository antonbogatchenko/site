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
          <h1
            className={styles.title}
            style={{ fontSize: "var(--font-size-hero)", lineHeight: 1.05 }}
          >
            ANTON
            <br />
            BOGATCHENKO
          </h1>
          <p className={styles.description}>
            Multi-disciplinary professional based in Helsinki. Experienced in
            hospitality, events, and creative content. Available for projects
            locally and globally.
          </p>
          <div className={styles.contacts}>
            <a href="mailto:anton@antonbogatchenko.com" className="neon-link">
              anton@antonbogatchenko.com
            </a>
            <a
              href="https://instagram.com/antonbogatchenko"
              target="_blank"
              rel="noreferrer"
              className="neon-link"
            >
              @antonbogatchenko
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <h2 className={styles.sectionTitle}>PROJECTS</h2>
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>WOODS</h3>
          <ImageGallery images={woodsImages} altPrefix="Woods project" />
        </div>
      </section>
    </div>
  );
}
