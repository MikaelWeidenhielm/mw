
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight/lib'

import _Image from '@/app/components/_Image'

export async function getPostByName(filename) {
    const res = await fetch(`https://raw.githubusercontent.com/MikaelWeidenhielm/site-content/main/${filename}`, {
        headers: {
            Authorization: `token ${process.env.GH_TOKEN}`,
            Accept: 'application/vnd.github+json',
            'X-Github-Api-Version': '2022-11-28',
        }
    })

    
    if (!res.ok) return undefined

    const rawMDX = await res.text()

    if (rawMDX === '404: Not Found') return undefined


    const { frontmatter, content } = await compileMDX({
        source: rawMDX,
        components: {
            _Image,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                ]
            }
        }
    })

    const id = filename.replace(/\.mdx$/, '')

    const postObj = {
        meta: {
            id,
            title: frontmatter.title,
        },
        content
    } 

    return postObj
}

export async function getPostsMeta() {
    const res = await fetch('https://api.github.com/repos/MikaelWeidenhielm/site-content/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${process.env.GH_TOKEN}`,
            'X-Github-Api-Version': '2022-11-28',
        }
    })

    if(!res.ok) return undefined

    const repoFiletree = await res.json()

    const filesArray = repoFiletree.tree.map(obj => obj.path)
    .filter(path => path.endsWith('.mdx'))

    const posts = []

    for (const file of filesArray) {
        const post = await getPostByName(file)

        if (post) {
            const { meta } = post

            posts.push(meta)
        }
    }

    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}