import Image from "next/image";
import Link from "next/link";
import Layout from "./navigation";


export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6"> Welcome to the Home Page </h1>
      <Link href="/about">Go to About page</Link><br />
      <Link href="/posts/1">Post 1</Link> <br />
      <Link href="/posts/2">Post 2</Link>
      <p>Your API key: {process.env.NEXT_PUBLIC_API_KEY}</p>
    </Layout>
  );
}
