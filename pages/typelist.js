import Head from "next/head";
import { useState, useEffect } from 'react';
import Layout from "../components/layout";

import { getDatabase } from "../lib/notion";

export const databaseId = process.env.TYPELIST_DB_ID;

export default function Typelist({ fonts }) {
  const [filteredFonts, setFilteredFonts] = useState(fonts)
  const [filterType, setFilterType] = useState({style: 'all', price: 'all'});

  useEffect(() => {

    const filtered = fonts
      .filter(({ style }) => filterType.style === 'all' ? true : style.select.name === filterType.style)
      .filter(({ price }) => filterType.price === 'all' ? true : price.select.name === filterType.price);

    setFilteredFonts(filtered);

  }, [filterType, fonts])

  return (
    // <Layout title={"Typelist"} filter={true} setFilter={() => setFilterType({style: "serif", price: filterType.price })}>
    <Layout title={"Typelist"} filter={true} setFilter={setFilterType} filterType={filterType}>
      <Head>
        <title>Typelist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          {filteredFonts.map((font) => {
            return (
              <div key={font.font.title[0].plain_text}
                   className="flex justify-between pb-md">
                <a className="w-[180px] pr-sm font-medium underline">{font.font.title[0].plain_text}</a>
                <p className="pr-sm text-right font-light">{font.style.select.name}</p>
                <p className="text-right font-light">{font.price.select.name}</p>
              </div>
            )
          })}
          <p onClick={() => setFilterType({style: filterType.style, price: "all"})}>all prices</p>
          <p onClick={() => setFilterType({style: filterType.style, price: "free" })}>free fonts</p>
          <p onClick={() => setFilterType({style: filterType.style, price: "paid" })}>paid fonts</p>
          <p onClick={() => setFilterType({style: "all", price: filterType.price})}>all styles</p>
          <p onClick={() => setFilterType({style: "serif", price: filterType.price })}>serif fonts</p>
          <p onClick={() => setFilterType({style: "sans", price: filterType.price })}>sans fonts</p>
    </Layout>
  );
}

export const getStaticProps = async () => {

  const data = await getDatabase(databaseId);

  const fonts = [];

  data.forEach((font) => {
    fonts.push(font.properties)
  })

  return {
    props: {
      fonts: fonts,
    },
    revalidate: 1
  }
}