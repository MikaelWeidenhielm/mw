import Head from "next/head";
import Forward from "../components/icon/forward";
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
                 rel="noreferrer"
                 key={b.url.id}
                 className="w-full flex flex-col p-sm rounded hover:bg-subtle dark:hover:bg-inverse_subtle transition-all">
                <div className="w-full flex items-center">
                    <img className="h-[15px] w-[15px] rounded" src={`http://www.google.com/s2/favicons?domain=${b.url.url}`} alt="favicon" />
                    <p className="w-full font-medium text-default dark:text-inverse pl-sm">{b.bookmark.title[0].plain_text}</p>
                    <Forward width={16} height={16} />
                </div>
                <div className="w-full flex">
                    <p className="pl-md w-1/2 font-light text-sm text-neutral truncate">{b.url.url}</p>
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
    revalidate: 60
  }
}