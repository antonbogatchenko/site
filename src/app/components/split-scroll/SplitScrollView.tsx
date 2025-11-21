import React from "react";
import styles from "./SplitScrollView.module.css";
import { Project } from "@/app/types";
import Image from "next/image";

interface SplitScrollViewProps {
  project: Project;
  position?: "left" | "right";
}

export const SplitScrollView: React.FC<SplitScrollViewProps> = ({
  project,
  position = "right",
}) => {
  const bgItem = project.items[0];
  return (
    <article className={styles.wrapper}>
      <div
        className={styles.aside}
        style={{
          backgroundImage: `url(${bgItem.src})`,
          color: project.accent,
          order: position === "left" ? 1 : 0,
        }}
      >
        <h3 className={styles.header}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div
        className={styles.scroll}
        style={{ backgroundColor: `${project.accent}20` }}
      >
        {project.items.map((item, i) => (
          <div key={i} className={styles.imageContainer}>
            <Image
              src={item.src}
              alt={item.description}
              className={styles.projectImage}
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </article>
  );
};
