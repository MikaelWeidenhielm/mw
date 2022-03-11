import { Client } from "@notionhq/client";
import slugify from "slugify";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Post({ title, blocks }) {
  // console.log(blocks)
    return (
      <>
        <main>
            <p>{title}</p>
          {/* {posts.map((post) => (
            <p key={post.id}>
              <Link href={post.id}>{post.properties.Name.title[0].plain_text}</Link>
            </p>
          ))} */}
        </main>
      </>
    );
  }

export const getStaticPaths = async () => {
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

    return {
        paths: data.map((page) => ({ params: { slug: slugify(page.properties.name.title[0].plain_text).toLocaleLowerCase() } })),
        // paths: data.map((page) => ({ params: { slug: page.id } })),
        fallback: false,
      };
}

export const getStaticProps = async ( {params: { slug } } ) => {
    // fetch details for post
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    })

    // const data = await notion.blocks.children.list({
    //   block_id: process.env.NOTION_DATABASE_ID
    // })

    const getDatabase = async (databaseId) => {
      const response = await notion.databases.query({
        database_id: databaseId,
      });
      return response.results;
    };

    const data = await getDatabase(databaseId);

    const page = data.find((result) => {
      if(result.object === "page") {
        // console.log(result.properties.published.checkbox)
        const title = result.properties.name.title[0].plain_text;
        const resultSlug = slugify(title).toLocaleLowerCase()
        return resultSlug === slug
      }
      return false
    })

    const blocks = await notion.blocks.children.list({
        block_id: page.id
    })

    return {
        props: {
            title: page.properties.name.title[0].plain_text,
            blocks: blocks
        }
    }
}