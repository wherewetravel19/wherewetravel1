import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import styles from "./blog.module.css";

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="badge">📝 Travel Blog</div>
          <h1>Guides, Tips &amp; Inspiration</h1>
          <p>Practical travel advice and destination guides written by our team and travel community.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.info}>
                  <div className={styles.category}>{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
