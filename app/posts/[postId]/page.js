import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation';

import Link from 'next/link';

export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    if(!posts.find(post => post.id === postId)) {
        return notFound();
    }

    const {title, contentHtml } = await getPostData(postId)
  
    return (
        <main>
            <h1>{title}</h1>
            <article>
                <section dangerouslySetInnerHTML = {{ __html: contentHtml }} />
                <p>
                    <Link href="/">Back to home</Link>
                </p>
            </article>
        </main>
  )
}
