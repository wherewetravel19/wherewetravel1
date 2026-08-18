// استبدل محتوى: components/Footer.jsx بهذا الملف بالكامل
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Where we Travel logo"
              width={36}
              height={36}
              className={styles.logoImg}
            />
            <span>
              Where we <span className={styles.accentText}>Travel</span>
            </span>
          </div>
          <p className={styles.desc}>
            Your AI-powered companion for smarter trip planning, budgeting, and
            unforgettable travel experiences.
          </p>
        </div>

        <div className={styles.linksWrap}>
          <div className={styles.col}>
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className={styles.col}>
            <h5>Legal</h5>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div className={styles.col}>
            <h5>Follow Us</h5>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="X">x</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>© 2026 Where we Travel. All rights reserved.</div>
    </footer>
  );
}
