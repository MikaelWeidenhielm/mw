import Head from "next/head";
import Forward from "../components/icon/Forward";
import Layout from "../components/layout";

import { getDatabase } from "../lib/notion";

export const databaseId = process.env.BOOKMARK_DB_ID;

export default function Bookmarks({ bookmarks }) {
  return (
    <Layout title={"Bookmarks"}>
      <Head>
        <title>Bookmarks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          {bookmarks.map((b) => {
            return (
              <a href={b.url.url}
                 target="_blank"
                 key={b.url.id}
                 className="w-full flex flex-col p-sm rounded hover:bg-subtle transition-all">
                <div className="w-full flex items-center">
                    <img className="h-[15px] w-[15px] rounded" src={`http://www.google.com/s2/favicons?domain=${b.url.url}`} alt="favicon" />
                    <p className="w-full font-medium pl-sm">{b.bookmark.title[0].plain_text}</p>
                    <Forward width={20} height={20} />
                </div>
                <div className="w-full flex">
                    <p className="pl-md w-1/2 font-light text-sm text-subtle truncate">{b.url.url}</p>
                </div>
              </a>
            )
          })}
    </Layout>
  );
}

export const getStaticProps = async () => {

  const data = await getDatabase(databaseId);

  const bookmarks = [];

  data.forEach((b) => {
    bookmarks.push(b.properties)
  })

  return {
    props: {
      bookmarks: bookmarks,
    },
    revalidate: 1
  }
}