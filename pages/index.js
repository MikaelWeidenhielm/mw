import Head from "next/head";
import Link from "next/link";
import slugify from "slugify";

import { getDatabase, getBlocks } from "../lib/notion";
import { Fragment } from "react";
import { renderBlock } from "../components/renderBlock";


export const databaseId = process.env.MW_DB_ID;

export default function Home({ posts, introBlocks }) {
  return (
    <>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          {introBlocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
        <h2>All Posts</h2>
        {posts.map((post) => {

          const p = post.properties;

          if (p.published.checkbox === false) return false

          if (p.external.checkbox === true) {
            return (
              <p key={post.id}>
                <a href={p.link.url} target="_blank">{p.name.title[0].plain_text}</a>
              </p>
            )
          }

          return (
            <p key={post.id}>
              <Link href={`/${slugify(p.name.title[0].plain_text).toLocaleLowerCase()}`}>
                {p.name.title[0].plain_text}
              </Link>
            </p>
            )
          })}
      </main>
    </>
  );
}

export const getStaticProps = async () => {

  const data = await getDatabase(databaseId);

  const introBlocks = await getBlocks(process.env.INTRO_PAGE_ID);

  return {
    props: {
      posts: data,
      introBlocks: introBlocks
    },
    revalidate: 1
  }
}