"use client";

import { useState } from "react";
import TripPlannerModal from "@/components/TripPlannerModal";
import BudgetDonut from "@/components/BudgetDonut";
import styles from "./plan-trip.module.css";

export default function PlanTripPage() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="badge">🤖 AI-Powered Planning</div>
          <h1>Plan Your Trip</h1>
          <p>
            Answer a few quick questions and let our AI build a personalized
            itinerary and budget plan for your next adventure.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.stepsExplainer}>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>1</div>
                <div>
                  <h3>Destination &amp; Dates</h3>
                  <p>Tell us where you want to go and when.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>2</div>
                <div>
                  <h3>Budget &amp; Interests</h3>
                  <p>Set your total budget and what you love to do.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>3</div>
                <div>
                  <h3>Review &amp; Submit</h3>
                  <p>Confirm your email and get your personalized plan.</p>
                </div>
              </div>
              <button className="btn-accent" style={{ marginTop: 20 }} onClick={() => setModalOpen(true)}>
                Start Planning
              </button>
            </div>

            <BudgetDonut total={2850} days={7} travelers={2} />
          </div>
        </div>
      </section>

      <TripPlannerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
