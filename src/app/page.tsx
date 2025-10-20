import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1
          className={styles.title}
          style={{ fontSize: "var(--font-size-hero)", lineHeight: 1.05 }}
        >
          ANTON
          <br />
          BOGATCHENKO
        </h1>
        <p
          style={{ color: "var(--muted)", maxWidth: 720, textAlign: "center" }}
        >
          Futuristic. Minimal. Global. Confident. Creative. Mysterious. Premium.
        </p>
      </main>
      <footer className={styles.footer}>
        Browse About, Works, and Contacts above.
      </footer>
    </div>
  );
}
