import React from "react";
import styles from "./PageFooter.module.css";

export const PageFooter: React.FC = () => (
  <footer className={styles.footer}>
    <small className={styles.text}>
      © {new Date().getFullYear()} Anton Bogatchenko - All Rights Reserved
    </small>
  </footer>
);
