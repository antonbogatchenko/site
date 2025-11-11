import React from "react";
import { ImageGallery } from "./ImageGallery";
import { projects } from "../data";
import styles from "./ProjectsSection.module.css";
import { ProjectsHeader } from "./headers";

export const ProjectsSection: React.FC = () => (
  <section id="projects" className={styles.section}>
    <ProjectsHeader />
    <div className={styles.grid}>
      {projects.map((project) => (
        <article
          key={project.name}
          className={styles.card}
          style={
            {
              "--card-accent": project.accent
                ? `${project.accent}40`
                : "rgba(255, 228, 94, 0.35)",
            } as React.CSSProperties
          }
        >
          <div className={styles.content}>
            <div className={styles.header}>
              <h3 className={styles.name}>{project.name}</h3>
            </div>
            <p className={styles.description}>{project.description}</p>
            <ImageGallery items={project.items} />
          </div>
        </article>
      ))}
    </div>
  </section>
);
