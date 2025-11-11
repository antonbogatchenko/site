import React from "react";
import Link from "next/link";
import styles from "./headers.module.css";

export const HeroHeader: React.FC = () => (
  <div className={`${styles.header} ${styles.heroHeader}`}>
    <a href="#projects" className={styles.cta}>
      view projects
    </a>
  </div>
);

export const ProjectsHeader: React.FC = () => (
  <div className={`${styles.header} ${styles.projectsHeader}`}>
    <Link href="/" className={styles.title}>
      Anton Bogatchenko
    </Link>
    <a href="#contact" className={styles.cta}>
      contact
    </a>
  </div>
);
