import { getPostsMeta, getPostByName } from '@/lib/posts'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css'

export const revalidate = 10

export async function generateStaticParams() {
    const posts = await getPostsMeta()

    if(!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params }) {
  
    const post = await getPostByName(`${params.postId}.mdx`)

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}

export default async function Post({ params }) {
  
    const { postId } = params
    
    const post = await getPostByName(`${postId}.mdx`)

    if(!post) notFound()

    const { meta, content } = post
    
    return (
        <>
            <h2>{meta.title}</h2>
            <article>
                {content}
            </article>
            <p>
                <Link href="/">Back to home</Link>
            </p>
        </>
  )
}
