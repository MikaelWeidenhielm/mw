import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link"

export default function Posts() {
    const posts = getSortedPostsData()

  return (
    <section>
        <h2>Blog</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}><Link href={`/${post.id}`}>{post.title}</Link></li>
            ))}
        </ul>
    </section>
  )
}
