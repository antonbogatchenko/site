import React from "react";
import { projects } from "../data";
import styles from "./ProjectsSection.module.css";
import { ProjectsHeader } from "./headers";
import { GalleryView } from "./gallery/GalleryView";

export const ProjectsSection: React.FC = () => (
  <section id="projects" className={styles.section}>
    <ProjectsHeader />
    <div className={styles.grid}>
      {projects.map((project) => (
        <GalleryView key={project.name} project={project} />
      ))}
    </div>
  </section>
);
