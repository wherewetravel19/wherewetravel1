"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/data";
import TripPlannerModal from "@/components/TripPlannerModal";
import styles from "./detail.module.css";

export default function DestinationDetailPage({ params }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!destination) return notFound();

  return (
    <>
      <section className={styles.heroImg}>
        <Image
          src={destination.gallery[0]}
          alt={`${destination.name}, ${destination.country}`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1>{destination.name}, {destination.country}</h1>
          <div className={styles.heroMeta}>
            <span>★ {destination.rating} ({destination.reviews.toLocaleString()} reviews)</span>
            <span>From ${destination.price}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div>
              <h2 className={styles.sectionTitle}>About {destination.name}</h2>
              <p className={styles.description}>{destination.description}</p>

              <div className={styles.tags}>
                {destination.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>

              <h2 className={styles.sectionTitle} style={{ marginTop: 48 }}>Gallery</h2>
              <div className={styles.gallery}>
                {destination.gallery.map((img, i) => (
                  <div className={styles.galleryImg} key={i}>
                    <Image
                      src={img}
                      alt={`${destination.name} photo ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.priceCard}>
                <div className={styles.priceLabel}>Starting from</div>
                <div className={styles.priceValue}>${destination.price}<span> / person</span></div>
                <button className="btn-accent" style={{ width: "100%" }} onClick={() => setModalOpen(true)}>
                  Plan This Trip
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <TripPlannerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDestination={`${destination.name}, ${destination.country}`}
      />
    </>
  );
}
