import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.css";

export const PageHeader: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/" className={styles.title}>
          Anton Bogatchenko
        </Link>
      </div>
      <a href="#projects" className={`corporate-button ${styles.cta}`}>
        View projects
      </a>
    </nav>
  </header>
);
