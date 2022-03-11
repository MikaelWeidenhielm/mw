import { Fragment } from "react";
import { getDatabase, getBlocks } from "../lib/notion";
import { renderBlock } from "../components/renderBlock";

import slugify from "slugify";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Post({ title, blocks }) {
  if (!blocks || !title ) {
    return <div />
  }
  return (
    <>
      <main>
        <h1>
          <p>{title}</p>
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
      </main>
    </>
  );
}

export const getStaticPaths = async () => {

    const data = await getDatabase(databaseId);

    return {
        paths: data.map((page) => ({ params: { slug: slugify(page.properties.name.title[0].plain_text).toLocaleLowerCase() } })),
        fallback: false,
      };
}

export const getStaticProps = async ( {params: { slug } } ) => {
    // fetch details for post
    const data = await getDatabase(databaseId);

    const page = data.find((result) => {
    
      if(result.object === "page" && result.properties.external.checkbox === false) {
        const title = result.properties.name.title[0].plain_text;
        const resultSlug = slugify(title).toLocaleLowerCase()
        return resultSlug === slug
      }
      return false
    })

    const blocks = await getBlocks(page.id);

    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocks(block.id),
          };
        })
    );
    const blocksWithChildren = blocks.map((block) => {
      // Add child blocks if the block should contain children but none exists
      if (block.has_children && !block[block.type].children) {
        block[block.type]["children"] = childBlocks.find(
          (x) => x.id === block.id
        )?.children;
      }
      return block;
    });

    return {
        props: {
            title: page.properties.name.title[0].plain_text,
            blocks: blocksWithChildren
        },
        revalidate: 1
    }
}