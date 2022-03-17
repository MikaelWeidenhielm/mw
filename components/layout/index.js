import Nav from "../nav";
import Head from "next/head";

export default function Layout({ children, title, navigation, filter, setFilter, filterType }) {
    return (
        <div className="max-w-screen-lg mx-auto mb-xl">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav title={title} navigation={navigation} filter={filter} setFilter={setFilter} filterType={filterType} />
            <main className="max-w-screen-sm mx-auto px-sm lg:px-0">{children}</main>
        </div>
    )
  }