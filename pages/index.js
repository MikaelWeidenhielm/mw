import { getDatabase, getBlocks } from "../lib/notion";
import { Fragment } from "react";
import { renderBlock } from "../components/renderBlock";
import Layout from "../components/layout";
import Post from "../components/post";


export const databaseId = process.env.MW_DB_ID;

export default function Home({ posts, introBlocks }) {

  return (
    <Layout title={"Mikael Weidenhielm"}>
      <div>
        <section className="pb-lg">
          {introBlocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
        <section className="pb-lg">
          <h2 className="w-full font-medium pb-xs text-subtle dark:text-inverse_subtle">Resources</h2>
          <div className="flex flex-col flex-wrap lg:flex-row">
            {posts.map((post) => {
              if (post.properties.postType.select.name === "writing") return
              return (
                <Post key={post.id} data={post} />
              )
            })}
          </div>
        </section>
        <section>
          <h2 className="w-full font-medium pb-xs text-subtle dark:text-inverse_subtle">Writing</h2>
          <div className="flex flex-col flex-wrap lg:flex-row">
            {posts.map((post) => {
              if (post.properties.postType.select.name === "resource") return
              return (
                <Post key={post.id} data={post} />
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
    revalidate: 60
  }
}