"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { interestOptions } from "@/lib/data";
import styles from "./TripPlannerModal.module.css";

const emptyForm = {
  destination: "",
  startDate: "",
  endDate: "",
  travelers: 2,
  budget: "",
  interests: [],
  email: "",
};

export default function TripPlannerModal({ isOpen, onClose, initialDestination = "" }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ ...emptyForm, destination: initialDestination });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleInterest(value) {
    setForm((prev) => {
      const has = prev.interests.includes(value);
      return {
        ...prev,
        interests: has
          ? prev.interests.filter((v) => v !== value)
          : [...prev.interests, value],
      };
    });
  }

  function validateStep1() {
    const e = {};
    if (!form.destination.trim()) e.destination = "Please enter a destination.";
    if (!form.startDate) e.startDate = "Please select a start date.";
    if (!form.endDate || (form.startDate && new Date(form.endDate) <= new Date(form.startDate)))
      e.endDate = "End date must be after start date.";
    if (!form.travelers || form.travelers < 1) e.travelers = "Please enter at least 1 traveler.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e = {};
    if (!form.budget || form.budget <= 0) e.budget = "Please enter your total budget.";
    if (form.interests.length === 0) e.interests = "Please select at least one interest.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep3() {
    const e = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) e.email = "Please enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setErrors({});
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrors({});
    setStep((s) => s - 1);
  }

  function handleSubmit() {
    if (!validateStep3()) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("wwt_trip_plan", JSON.stringify(form));
    }
    setSubmitted(true);
  }

  function handleClose() {
    setStep(1);
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
    onClose();
  }

  function goToResults() {
    handleClose();
    router.push("/plan-trip/results");
  }

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div className={styles.modalBox}>
        <button className={styles.close} onClick={handleClose} aria-label="Close">
          ✕
        </button>

        {!submitted && (
          <div className={styles.stepIndicator}>
            <div className={`${styles.dot} ${step === 1 ? styles.active : step > 1 ? styles.done : ""}`}>1</div>
            <div className={`${styles.line} ${step > 1 ? styles.done : ""}`} />
            <div className={`${styles.dot} ${step === 2 ? styles.active : step > 2 ? styles.done : ""}`}>2</div>
            <div className={`${styles.line} ${step > 2 ? styles.done : ""}`} />
            <div className={`${styles.dot} ${step === 3 ? styles.active : ""}`}>3</div>
          </div>
        )}

        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3>Your trip plan is on its way!</h3>
            <p>
              We&apos;ve saved your preferences and sent a confirmation to{" "}
              <strong>{form.email}</strong>. Our AI is now preparing personalized
              recommendations for your trip.
            </p>
            <button className="btn-accent" onClick={goToResults} style={{ width: "100%" }}>
              View Trip Summary
            </button>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div>
                <h3 className={styles.title}>Where are you headed?</h3>
                <p className={styles.subtitle}>Tell us your destination and travel dates.</p>

                <div className={`${styles.group} ${errors.destination ? styles.error : ""}`}>
                  <label>Destination</label>
                  <input
                    type="text"
                    placeholder="e.g. Santorini, Greece"
                    value={form.destination}
                    onChange={(e) => update("destination", e.target.value)}
                  />
                  {errors.destination && <div className={styles.errorMsg}>{errors.destination}</div>}
                </div>

                <div className={styles.row}>
                  <div className={`${styles.group} ${errors.startDate ? styles.error : ""}`}>
                    <label>Start Date</label>
                    <input
                      type="date"
                      value={form.startDate}
                      onChange={(e) => update("startDate", e.target.value)}
                    />
                    {errors.startDate && <div className={styles.errorMsg}>{errors.startDate}</div>}
                  </div>
                  <div className={`${styles.group} ${errors.endDate ? styles.error : ""}`}>
                    <label>End Date</label>
                    <input
                      type="date"
                      value={form.endDate}
                      onChange={(e) => update("endDate", e.target.value)}
                    />
                    {errors.endDate && <div className={styles.errorMsg}>{errors.endDate}</div>}
                  </div>
                </div>

                <div className={`${styles.group} ${errors.travelers ? styles.error : ""}`}>
                  <label>Number of Travelers</label>
                  <input
                    type="number"
                    min="1"
                    value={form.travelers}
                    onChange={(e) => update("travelers", Number(e.target.value))}
                  />
                  {errors.travelers && <div className={styles.errorMsg}>{errors.travelers}</div>}
                </div>

                <div className={styles.nav}>
                  <button className={styles.btnNext} style={{ flex: 1 }} onClick={goNext}>
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className={styles.title}>Set your budget &amp; interests</h3>
                <p className={styles.subtitle}>Help our AI tailor the perfect trip plan for you.</p>

                <div className={`${styles.group} ${errors.budget ? styles.error : ""}`}>
                  <label>Total Budget (USD)</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 2850"
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                  />
                  {errors.budget && <div className={styles.errorMsg}>{errors.budget}</div>}
                </div>

                <div className={`${styles.group} ${errors.interests ? styles.error : ""}`}>
                  <label>What are you interested in?</label>
                  <div className={styles.interestsGrid}>
                    {interestOptions.map((opt) => (
                      <div
                        key={opt.value}
                        className={`${styles.chip} ${
                          form.interests.includes(opt.value) ? styles.chipSelected : ""
                        }`}
                        onClick={() => toggleInterest(opt.value)}
                      >
                        {opt.icon} {opt.value}
                      </div>
                    ))}
                  </div>
                  {errors.interests && <div className={styles.errorMsg}>{errors.interests}</div>}
                </div>

                <div className={styles.nav}>
                  <button className={styles.btnBack} onClick={goBack}>
                    ← Back
                  </button>
                  <button className={styles.btnNext} onClick={goNext}>
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className={styles.title}>Almost there!</h3>
                <p className={styles.subtitle}>Enter your email and review your trip details.</p>

                <div className={`${styles.group} ${errors.email ? styles.error : ""}`}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  {errors.email && <div className={styles.errorMsg}>{errors.email}</div>}
                </div>

                <div className={styles.reviewBox}>
                  <div className={styles.reviewRow}>
                    <span>Destination</span>
                    <span>{form.destination}</span>
                  </div>
                  <div className={styles.reviewRow}>
                    <span>Dates</span>
                    <span>{form.startDate} → {form.endDate}</span>
                  </div>
                  <div className={styles.reviewRow}>
                    <span>Travelers</span>
                    <span>{form.travelers}</span>
                  </div>
                  <div className={styles.reviewRow}>
                    <span>Budget</span>
                    <span>${form.budget}</span>
                  </div>
                  <div className={styles.reviewRow}>
                    <span>Interests</span>
                    <span>{form.interests.join(", ")}</span>
                  </div>
                </div>

                <div className={styles.nav}>
                  <button className={styles.btnBack} onClick={goBack}>
                    ← Back
                  </button>
                  <button className={styles.btnSubmit} onClick={handleSubmit}>
                    Submit Trip Plan
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
