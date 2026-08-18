"use client";

import Image from "next/image";
import { events } from "@/lib/data";
import styles from "./events.module.css";

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="badge">🎉 Events & Festivals</div>
          <h1>Discover Events Around the World</h1>
          <p>Plan your trip around festivals, concerts, and cultural events curated by our AI engine.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.grid}>
            {events.map((ev) => (
              <div className={styles.card} key={ev.id}>
                <div className={styles.imgWrap}>
                  <Image src={ev.image} alt={ev.title} fill style={{ objectFit: "cover" }} />
                  <div className={styles.category}>{ev.category}</div>
                </div>
                <div className={styles.info}>
                  <h3>{ev.title}</h3>
                  <p className={styles.location}>📍 {ev.location}</p>
                  <p className={styles.date}>
                    {new Date(ev.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
