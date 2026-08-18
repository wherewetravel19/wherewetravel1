"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./results.module.css";

export default function TripResultsPage() {
  const [trip, setTrip] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wwt_trip_plan");
    if (saved) setTrip(JSON.parse(saved));
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  if (!trip) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "var(--navy)", marginBottom: 16 }}>No trip plan found</h1>
          <p style={{ color: "var(--muted)", marginBottom: 24 }}>
            You haven&apos;t submitted a trip plan yet.
          </p>
          <Link href="/plan-trip" className="btn-accent">Plan a Trip</Link>
        </div>
      </section>
    );
  }

  const days =
    trip.startDate && trip.endDate
      ? Math.max(1, Math.round((new Date(trip.endDate) - new Date(trip.startDate)) / 86400000))
      : null;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.successIcon}>✓</div>
          <h1>Your Trip Plan is Ready!</h1>
          <p>We&apos;ve saved your preferences. Here&apos;s a summary of your upcoming trip.</p>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.row}>
            <span>Destination</span>
            <strong>{trip.destination}</strong>
          </div>
          <div className={styles.row}>
            <span>Dates</span>
            <strong>{trip.startDate} → {trip.endDate} {days ? `(${days} days)` : ""}</strong>
          </div>
          <div className={styles.row}>
            <span>Travelers</span>
            <strong>{trip.travelers}</strong>
          </div>
          <div className={styles.row}>
            <span>Total Budget</span>
            <strong>${trip.budget}</strong>
          </div>
          <div className={styles.row}>
            <span>Interests</span>
            <strong>{trip.interests?.join(", ")}</strong>
          </div>
          <div className={styles.row}>
            <span>Confirmation Email</span>
            <strong>{trip.email}</strong>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/destinations" className="btn-outline">Browse Destinations</Link>
          <Link href="/plan-trip" className="btn-accent">Plan Another Trip</Link>
        </div>
      </div>
    </section>
  );
}
