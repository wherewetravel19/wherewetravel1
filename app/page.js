"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DestinationCard from "@/components/DestinationCard";
import BudgetDonut from "@/components/BudgetDonut";
import TripPlannerModal from "@/components/TripPlannerModal";
import { destinations, features, stats, testimonials } from "@/lib/data";
import styles from "./page.module.css";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchDest, setSearchDest] = useState("");

  function handleExplore() {
    setModalOpen(true);
  }

  return (
    <>
      <section className={styles.hero} id="home">
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <div className="badge">✈ Your Next Destination</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.navyText}>Plan Smarter.</span>
                <span className={styles.accentText}>Travel Better.</span>
              </h1>
              <p className={styles.heroDesc}>
                Where we Travel is your AI-powered companion for planning
                unforgettable trips — smart budgeting, curated destinations,
                and the best flight &amp; hotel deals, all tailored to you.
              </p>
              <div className={styles.heroIcons}>
                <div className={styles.heroIconItem}>
                  <span className={styles.heroIconCircle}>🧭</span> Smart Planning
                </div>
                <div className={styles.heroIconItem}>
                  <span className={styles.heroIconCircle}>🏷️</span> Best Deals
                </div>
                <div className={styles.heroIconItem}>
                  <span className={styles.heroIconCircle}>🤖</span> AI Powered
                </div>
                <div className={styles.heroIconItem}>
                  <span className={styles.heroIconCircle}>🎯</span> Tailored for You
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImgWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop"
                  alt="Santorini Greece coastal view"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.mapDecor}>
                <span className={styles.pin}>📍</span> Santorini, Greece
              </div>
            </div>
          </div>

          <div className={styles.searchBar}>
            <div className={styles.searchField}>
              <label>Where to</label>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchDest}
                onChange={(e) => setSearchDest(e.target.value)}
              />
            </div>
            <div className={styles.searchField}>
              <label>Check-in</label>
              <input type="date" />
            </div>
            <div className={styles.searchField}>
              <label>Check-out</label>
              <input type="date" />
            </div>
            <div className={styles.searchField}>
              <label>Travelers</label>
              <input type="number" min="1" defaultValue={2} />
            </div>
            <button className={styles.exploreBtn} onClick={handleExplore}>
              Explore
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="destinations">
        <div className="container">
          <div className="section-head">
            <h2>Popular Destinations</h2>
            <Link href="/destinations" className="view-all">
              View all destinations →
            </Link>
          </div>
          <div className={styles.destGrid}>
            {destinations.slice(0, 5).map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`} id="deals">
        <div className="container">
          <div className="section-head">
            <h2>Everything You Need to Travel Smart</h2>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div className={styles.featureCard} key={f.title}>
                <div className={styles.featureIcon} style={{ background: f.color }}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.budgetSection}>
        <div className="container">
          <div className={styles.budgetInner}>
            <div>
              <h2 className={styles.budgetTitle}>
                Manage your entire trip budget intelligently
              </h2>
              <p className={styles.budgetDesc}>
                Our AI-powered budget planner breaks down your trip costs by
                category, giving you full visibility and control over
                flights, hotels, food, and more — so you always travel within
                budget.
              </p>
              <div className={styles.budgetActions}>
                <button className="btn-accent" onClick={() => setModalOpen(true)}>
                  Plan Your Trip
                </button>
                <Link href="/faq" className={styles.linkHow}>
                  How it works?
                </Link>
              </div>
            </div>
            <BudgetDonut total={2850} days={7} travelers={2} />
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection} id="events">
        <div className="container">
          <div className={styles.testimonialInner}>
            <div className={styles.stars}>
              {"★".repeat(testimonials[0].rating)}
            </div>
            <p className={styles.quote}>&quot;{testimonials[0].quote}&quot;</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <Image
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  width={56}
                  height={56}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <div className={styles.authorName}>{testimonials[0].name}</div>
                <div className={styles.authorRole}>{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TripPlannerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialDestination={searchDest}
      />
    </>
  );
}
