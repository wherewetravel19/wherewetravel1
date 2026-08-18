"use client";

import { useState, useMemo } from "react";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/data";
import styles from "./destinations.module.css";

export default function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = useMemo(() => {
    let list = destinations.filter(
      (d) =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.country.toLowerCase().includes(query.toLowerCase())
    );
    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [query, sortBy]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="badge">🌍 Explore the World</div>
          <h1>All Destinations</h1>
          <p>
            Browse every destination curated by our AI travel engine — from
            island escapes to cultural capitals.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.toolbar}>
            <input
              type="text"
              placeholder="Search by city or country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="rating">Sort by Rating</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className={styles.noResults}>No destinations match your search.</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
