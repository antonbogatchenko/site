import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
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
              <p className={styles.subtitle}>Anton Bogatchenko</p>
              <h1 className={styles.title}>Portfolio</h1>
              <p className={styles.description}>
                Based in Helsinki, Finland. Experienced in hospitality, events,
                and creative content. Available for projects locally and
                globally. Let&apos;s create something amazing together!
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

        <article className={`${styles.card} ${styles.highlightCard}`}>
          <div>
            <h2>Highlights</h2>
            <div className={styles.list}>
              <span className={styles.listItem}>
                Analog &amp; digital capture
              </span>
              <span className={styles.listItem}>
                Art direction &amp; styling
              </span>
              <span className={styles.listItem}>On-location production</span>
              <span className={styles.listItem}>Editioned fine-art prints</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
