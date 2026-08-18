"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DestinationCard.module.css";

export default function DestinationCard({ destination }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.card}>
      <Link href={`/destinations/${destination.slug}`}>
        <div className={styles.imgWrap}>
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 20vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.rating}>★ {destination.rating}</div>
        </div>
      </Link>
      <button
        className={`${styles.heart} ${saved ? styles.saved : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setSaved((v) => !v);
        }}
        aria-label="Save destination"
      >
        {saved ? "♥" : "♡"}
      </button>
      <Link href={`/destinations/${destination.slug}`}>
        <div className={styles.info}>
          <h3>{destination.name}, {destination.country}</h3>
          <p>Explore the beauty of {destination.name}</p>
          <div className={styles.price}>
            From <span>${destination.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
