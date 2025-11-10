import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.css";

export const PageHeader: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/" className={styles.title}>
        Anton Bogatchenko
      </Link>
      <a href="#projects" className={styles.cta}>
        View projects
      </a>
    </nav>
  </header>
);
