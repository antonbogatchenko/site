import React from "react";
import { projects } from "../data";
import styles from "./ProjectsSection.module.css";
import { ProjectsHeader } from "./headers";
import { GalleryView } from "./gallery/GalleryView";
import { SplitScrollView } from "./split-scroll/SplitScrollView";

export const ProjectsSection: React.FC = () => (
  <section id="projects" className={styles.section}>
    <ProjectsHeader />
    {projects.map((project, i) => {
      switch (project.variant) {
        case "gallery":
          return <GalleryView key={project.name} project={project} />;
        case "split-scroll-left":
          return (
            <SplitScrollView
              key={project.name}
              project={project}
              position="left"
            />
          );
        case "split-scroll":
        default:
          return (
            <SplitScrollView
              key={project.name}
              project={project}
              position="right"
            />
          );
      }
    })}
  </section>
);
