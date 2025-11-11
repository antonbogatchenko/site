import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { HeroHeader } from "./headers";

export const HeroSection: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <article className={styles.hero}>
        <div className={styles.actions}>
          <a href="mailto:anton@antonbogatchenko.com">email</a>
          <a
            href="https://instagram.com/antonbogatchenko"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </div>
        <Image
          src="/me.jpg"
          alt="Anton Bogatchenko"
          width={360}
          height={480}
          className={styles.image}
          priority
        />
        <div className={styles.details}>
          <p className={styles.title}>Anton Bogatchenko</p>
          <p className={styles.description}>
            Based in Helsinki, Finland. Experienced in hospitality, events, and
            creative content. Available for projects locally and globally.
            Let&apos;s create something amazing together!
          </p>
        </div>
      </article>
      <HeroHeader />
    </section>
  );
};
