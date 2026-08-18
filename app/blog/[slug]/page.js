import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import styles from "./post.module.css";

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="section">
      <div className={`container ${styles.wrap}`}>
        <Link href="/blog" className={styles.back}>← Back to Blog</Link>
        <div className={styles.category}>{post.category}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>By {post.author}</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
        </div>

        <div className={styles.imgWrap}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} priority />
        </div>

        <p className={styles.content}>{post.content}</p>
      </div>
    </article>
  );
}
