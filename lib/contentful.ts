const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getAllPosts = async () => {
  const posts = await client
    .getEntries({ content_type: "post" })
    .then((response: any) => response.items);

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await client.getEntries({
    content_type: "post",
    "fields.slug[match]": slug,
    include: 1,
  });
  return post;
};
