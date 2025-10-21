"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { ProjectItem } from "../types";

interface ImageGalleryProps {
  items: ProjectItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = useCallback(
    (image: ProjectItem) => {
      const index = items.indexOf(image);
      setCurrentIndex(index);
      setSelectedImage(image);
    },
    [items]
  );

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(items[nextIndex]);
  }, [currentIndex, items]);

  const goToPrevious = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(items[prevIndex]);
  }, [currentIndex, items]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "Escape":
          event.preventDefault();
          closeModal();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, items, goToNext, goToPrevious, closeModal]);

  return (
    <>
      <div className={styles.projectImages}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.imageContainer}
            onClick={() => openModal(item)}
          >
            <Image
              src={item.src}
              alt={item.description}
              fill
              className={styles.projectImage}
              sizes="(max-width: 768px) 200px, 300px"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>

            {/* Navigation Arrows */}
            {items.length > 1 && (
              <>
                <button
                  className={styles.navButton}
                  onClick={goToPrevious}
                  style={{ left: "20px" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className={styles.navButton}
                  onClick={goToNext}
                  style={{ right: "20px" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            {items.length > 1 && (
              <div className={styles.imageCounter}>
                {currentIndex + 1} / {items.length}
              </div>
            )}

            <div className={styles.modalImageContainer}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.description}
                fill
                className={styles.modalImage}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
