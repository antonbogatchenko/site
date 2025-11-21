import React from "react";
import styles from "./GalleryView.module.css";
import { Project } from "@/app/types";
import { ImageGallery } from "./ImageGallery";

interface GalleryProps {
  project: Project;
}

export const GalleryView: React.FC<GalleryProps> = ({ project }) => (
  <article
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
);
