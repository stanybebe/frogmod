import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../lib/contentful";
import styles from "../styles/Home.module.css";

export default function Home({ posts }: any) {
  return (
    <div>
      <Head>
        <title>Frogmod</title>
        <meta name="description" content="Frogmod Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {posts.map((post: any) => (
          <Link key={post.sys.id} href={`/posts/${post.fields.slug}`}>
            <p className="text-lg">{post.fields.title}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return { props: { posts: posts } };
}
