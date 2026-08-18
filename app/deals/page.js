"use client";

import Image from "next/image";
import { deals } from "@/lib/data";
import styles from "./deals.module.css";

export default function DealsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="badge">🏷️ Limited-Time Offers</div>
          <h1>Best Flight &amp; Hotel Deals</h1>
          <p>
            Hand-picked deals updated daily by our AI pricing engine — book
            before they&apos;re gone.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.grid}>
            {deals.map((deal) => (
              <div className={styles.card} key={deal.id}>
                <div className={styles.imgWrap}>
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.discountBadge}>-{deal.discount}%</div>
                </div>
                <div className={styles.info}>
                  <div className={styles.type}>{deal.type}</div>
                  <h3>{deal.title}</h3>
                  <p className={styles.dest}>{deal.destination}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>${deal.originalPrice}</span>
                    <span className={styles.newPrice}>${deal.price}</span>
                  </div>
                  <div className={styles.validity}>
                    Valid until {new Date(deal.validUntil).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                  <button className="btn-accent" style={{ width: "100%", marginTop: 14 }}>
                    Grab This Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
