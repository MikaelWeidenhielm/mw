import BossImg from "./components/BossImg"
import Posts from "./components/Posts"

export const revalidate = 10

export default function Home() {
  return (
    <div>
      <BossImg />
     <p>hejhej!</p>
     <br />
     <Posts />
    </div>
  )
}
