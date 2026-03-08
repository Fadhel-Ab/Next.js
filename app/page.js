import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Welcome to the Home Page </h1>
      <Link href="/about">Go to About page</Link><br />
      <Link href="/posts/1">Post 1</Link> <br />
      <Link href="/posts/2">Post 2</Link>
    </main>
  );
}
