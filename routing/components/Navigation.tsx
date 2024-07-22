"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "⭐" : null}
        </li>
        <li>
          <Link href="/about">About</Link> {path === "/about" ? "⭐" : null}
        </li>
      </ul>
    </div>
  );
}
