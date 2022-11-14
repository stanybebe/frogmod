import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../lib/contentful";

const pal = [
  { name: "bg-cream", hex: "#fff9eb" },
  { name: "bg-frog", hex: "#70ff38" },
  { name: "bg-purple", hex: "#cd5aff" },
  { name: "bg-yellow", hex: "#f4c410" },
  { name: "bg-white", hex: "#fcfcfc" },
  { name: "bg-blue", hex: "#050399" },
  { name: "bg-green", hex: "#0e7e6b" },
  { name: "bg-charcoal", hex: "#333333" },
  { name: "bg-red", hex: "#fe3330" },
];

export default function Home({ posts }: any) {
  return (
    <div className="font-mono">
      <Head>
        <title>Frogmod</title>
        <meta name="description" content="Frogmod Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-cream">
        {posts.map((post: any) => (
          <Link key={post.sys.id} href={`/posts/${post.fields.slug}`}>
            <p className="text-lg">{post.fields.title}</p>
          </Link>
        ))}
        {pal.map((color: any) => (
          <div key={color.name} className={`w-20 h-20 ${color.name}`}>
            {color.name}
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return { props: { posts: posts } };
}
