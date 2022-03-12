import Head from "next/head";
import { useState, useEffect } from 'react';

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
    <>
      <Head>
        <title>Typelist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Typelist</h2>
        {filteredFonts.map((font) => {
          return (
            <div key={font.font.title[0].plain_text}>
              {font.font.title[0].plain_text}
              <span> </span>
              {font.style.select.name}
              <span> </span>
              {font.price.select.name}
            </div>
          )
        })}
        <p onClick={() => setFilterType({style: filterType.style, price: "all"})}>all prices</p>
        <p onClick={() => setFilterType({style: filterType.style, price: "free" })}>free fonts</p>
        <p onClick={() => setFilterType({style: filterType.style, price: "paid" })}>paid fonts</p>
        <p onClick={() => setFilterType({style: "all", price: filterType.price})}>all styles</p>
        <p onClick={() => setFilterType({style: "serif", price: filterType.price })}>serif fonts</p>
        <p onClick={() => setFilterType({style: "sans", price: filterType.price })}>sans fonts</p>
      </main>
    </>
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