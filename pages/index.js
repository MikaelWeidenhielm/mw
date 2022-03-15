import Head from "next/head";

import { getDatabase, getBlocks } from "../lib/notion";
import { Fragment } from "react";
import { renderBlock } from "../components/renderBlock";
import Layout from "../components/layout";
import Post from "../components/post";


export const databaseId = process.env.MW_DB_ID;

export default function Home({ posts, introBlocks }) {
  const writings = posts.filter((post) => post.properties.type);

  return (
    <Layout>
      <Head>
        <title>Mikael Weidenhielm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className="pb-md">
          {introBlocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
        <section className="pb-md">
          <h2 className="font-medium pb-sm text-subtle">Resources</h2>
          <div className="flex flex-col flex-wrap lg:flex-row">
            {posts.map((post) => {
              if (post.properties.postType.select.name === "writing") return
              return (
                <Post data={post} />
              )
            })}
          </div>
        </section>
        <section>
          <h2 className="font-medium pb-sm text-subtle">Writing</h2>
          <div className="flex flex-col flex-wrap lg:flex-row">
            {posts.map((post) => {
              // console.log(post)
              if (post.properties.postType.select.name === "resource") return
              return (
                <Post data={post} />
              )
            })}
          </div>
        </section>
      </div>
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