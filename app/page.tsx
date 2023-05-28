import Posts from "./components/Posts";
import Pres from "./home.mdx"
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="trinity-grid grid-w-small mx-auto">
      <div className="col-span-12">
      <Header />
      <Pres />
      </div>
    </main>
  )
}
