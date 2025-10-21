import styles from "./page.module.css";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
