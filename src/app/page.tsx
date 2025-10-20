import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Anton Bogatchenko</h1>
        <p>Multi-disciplinary professional based in Helsinki.</p>
      </main>
      <footer className={styles.footer}>
        Browse About, Works, and Contacts above.
      </footer>
    </div>
  );
}
