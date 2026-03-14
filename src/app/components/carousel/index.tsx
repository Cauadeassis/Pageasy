"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const images = [
  "/siteAdvocacia.png",
  "/sitePetshop.png",
  "/sitePsicologia.png",
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const count = images.length;

  const handleNext = () =>
    setActive((prev) => (prev >= count - 1 ? 0 : prev + 1));
  const handlePrev = () =>
    setActive((prev) => (prev <= 0 ? count - 1 : prev - 1));

  return (
    <div id="portfolio" className={styles.carousel}>
      <h2>Nosso portfólio</h2>
      <div className={styles.track}>
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="Nosso site"
            fill
            className={
              i === active ? `${styles.item} ${styles.active}` : styles.item
            }
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
}
