// استبدل محتوى: components/Navbar.jsx بهذا الملف بالكامل
// أضاف: صورة الشعار (public/logo.png) بجانب اسم الموقع
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";
import TripPlannerModal from "./TripPlannerModal";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/deals", label: "Deals" },
  { href: "/plan-trip", label: "Plan Trip" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={`container ${styles.navbar}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Where we Travel logo"
              width={40}
              height={40}
              className={styles.logoImg}
              priority
            />
            <span className={styles.logoText}>
              Where we <span className={styles.logoAccent}>Travel</span>
            </span>
          </Link>

          <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
                onClick={(e) => {
                  setMenuOpen(false);
                  if (link.href === "/plan-trip") {
                    e.preventDefault();
                    setModalOpen(true);
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.navActions}>
            <button className={styles.signIn}>Sign In</button>
            <button className={styles.signUp}>Sign Up</button>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      <TripPlannerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
