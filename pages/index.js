import Head from "next/head";
import Link from "next/link";
import slugify from "slugify";

import { getDatabase, getBlocks } from "../lib/notion";
import { Fragment } from "react";
import { renderBlock } from "../components/renderBlock";
import Logo from "../components/logo";
import Layout from "../components/layout";


export const databaseId = process.env.MW_DB_ID;

export default function Home({ posts, introBlocks }) {
  return (
    <Layout>
      <Head>
        <title>Mikael Weidenhielm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-lg lg:pt-100">
        <Logo />
      </div>

      <main>
        <section className="max-w-screen-sm">
          {introBlocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
        <h1>Resources</h1>
        {posts.map((post) => {

          const p = post.properties;

          if (p.published.checkbox === false) return

          if (p.external.checkbox === true) {
            return (
              <p className="py-sm" key={post.id}>
                <a href={p.link.url} target="_blank">{p.name.title[0].plain_text}</a>
                <p>{p.description.rich_text[0].plain_text}</p>
              </p>
            )
          }

          return (
            <div className="py-sm" key={post.id}>
              {/* {p.external.checkbox} */}
              <Link href={`/${slugify(p.name.title[0].plain_text).toLocaleLowerCase()}`}>
                {p.name.title[0].plain_text}
              </Link>
              <p>{p.description.rich_text[0].plain_text}</p>
            </div>
            )
          })}
      </main>
    </Layout>
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