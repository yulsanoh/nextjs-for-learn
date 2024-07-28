"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

export default function Movie({ title, id, poster_path }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img onClick={onClick} src={poster_path} alt={title} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
}
