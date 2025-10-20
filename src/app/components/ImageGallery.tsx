"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: string[];
  altPrefix: string;
}

export default function ImageGallery({ images, altPrefix }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (imageSrc: string) => {
    const index = images.indexOf(imageSrc);
    setCurrentIndex(index);
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

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
  }, [selectedImage, currentIndex, images]);

  return (
    <>
      <div className={styles.projectImages}>
        {images.map((imageSrc, i) => (
          <div
            key={i}
            className={styles.imageContainer}
            onClick={() => openModal(imageSrc)}
          >
            <Image
              src={imageSrc}
              alt={`${altPrefix} image ${i + 1}`}
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
            {images.length > 1 && (
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
            {images.length > 1 && (
              <div className={styles.imageCounter}>
                {currentIndex + 1} / {images.length}
              </div>
            )}

            <div className={styles.modalImageContainer}>
              <Image
                src={selectedImage}
                alt={`${altPrefix} image ${currentIndex + 1}`}
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
