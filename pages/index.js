import Head from "next/head";
import Link from "next/link";
import { Client } from "@notionhq/client";
import slugify from "slugify";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>All Posts</h2>
        {posts.map((post) => (
          post.properties.published.checkbox === true && 
          <p key={post.id}>
            <Link href={`/${slugify(post.properties.name.title[0].plain_text).toLocaleLowerCase()}`}>
              {post.properties.name.title[0].plain_text}
            </Link>
          </p>
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const notion = new Client({
      auth: process.env.NOTION_TOKEN,
  })

  const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  };

  const data = await getDatabase(databaseId);

  const posts = []

  return {
    props: {
      posts: data,
    }
  }
}