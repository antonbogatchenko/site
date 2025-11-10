import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { PageHeader } from "./PageHeader";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <article className={`${styles.card} ${styles.primaryCard}`}>
        <div className={styles.primaryContent}>
          <div className={styles.imageFrame}>
            <Image
              src="/me.jpg"
              alt="Anton Bogatchenko"
              fill
              sizes="(max-width: 900px) 60vw, 360px"
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.details}>
            <p className={styles.title}>Anton Bogatchenko</p>
            <p className={styles.description}>
              Based in Helsinki, Finland. Experienced in hospitality, events,
              and creative content. Available for projects locally and globally.
              Let&apos;s create something amazing together!
            </p>
            <div className={styles.actions}>
              <a
                href="mailto:anton@antonbogatchenko.com"
                className="corporate-button"
              >
                📧 Email Me
              </a>
              <a
                href="https://instagram.com/antonbogatchenko"
                target="_blank"
                rel="noreferrer"
                className="corporate-button"
                style={{
                  background: "var(--accent-yellow)",
                  transform: "rotate(-2deg)",
                }}
              >
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </article>
      <PageHeader />
    </section>
  );
};
