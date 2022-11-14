/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAllPosts, getPostBySlug } from "../../lib/contentful";

const Paragraph = ({ richText }: any) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => (
        <img src={node.data.target.fields.file.url} alt="block" />
      ),
    },
  };

  return <div className="">{documentToReactComponents(richText, options)}</div>;
};

const Post = ({ slug }: any) => {
  const postContent = slug.items[0].fields;

  return (
    <div>
      <Head>
        <title>Frogmod</title>
        <meta name="description" content="Frogmod Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl">{postContent.title}</h1>
        <p>{postContent.author}</p>
        <p>{postContent.date}</p>
        <div>
          {postContent.body.content.map((node: any, i: number) => (
            <Paragraph key={i} richText={node} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((entry: any) => ({
    params: { slug: entry.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const post = await getPostBySlug(params.slug);

  return { props: { slug: post } };
}

export default Post;
