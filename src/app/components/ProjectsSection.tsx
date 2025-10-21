import React from "react";
import { ImageGallery } from "./ImageGallery";
import { projects } from "../data";
import styles from "../page.module.css";

export const ProjectsSection: React.FC = () => (
  <section id="projects" className={styles.projects}>
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        border: "4px outset #cccccc",
        boxShadow: "var(--shadow-chunky)",
        margin: "20px",
      }}
    >
      <h2
        className={styles.sectionTitle}
        style={{
          textAlign: "center",
          marginBottom: "30px",
          background: "var(--gradient-primary)",
          color: "white",
          padding: "15px",
          borderRadius: "8px",
          border: "3px inset #cccccc",
          textShadow: "2px 2px 0px #000000",
        }}
      >
        🎨 MY AWESOME PROJECTS
      </h2>
      {projects.map((project) => (
        <div key={project.name} className={styles.project}>
          <div
            style={{
              background: "var(--gradient-secondary)",
              padding: "15px",
              borderRadius: "8px",
              border: "3px outset #cccccc",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <h3
              className={styles.projectTitle}
              style={{
                color: "white",
                textShadow: "2px 2px 0px #000000",
                margin: 0,
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                color: "white",
                margin: "10px 0 0 0",
                fontWeight: "bold",
                textShadow: "1px 1px 0px #000000",
              }}
            >
              {project.description}
            </p>
          </div>
          <ImageGallery items={project.items} />
        </div>
      ))}
    </div>
  </section>
);
