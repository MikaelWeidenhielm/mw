import Link from "next/link";
import slugify from "slugify";

import s from './post.module.css'

export default function Post({ data }) {
    const p = data.properties;

    if (p.published.checkbox === false) return false

    if (p.external.checkbox) {
        return (
            <a className={`${s.link} py-sm pr-lg sm:w-full lg:w-1/2`}
                href={p.link.url} 
                target="_blank"
                >
                    <h2 className="font-medium text-default dark:text-inverse pb-xs">{p.name.title[0].plain_text}</h2>
                    <p>{p.description.rich_text[0].plain_text}</p>
            </a>
        )
    } else {
        return (
            <Link href={`/${slugify(p.name.title[0].plain_text).toLocaleLowerCase()}`}>
                <a className={`${s.link} py-sm pr-lg sm:w-full lg:w-1/2`}>
                    <h2 className="font-medium text-default dark:text-inverse pb-xs">{p.name.title[0].plain_text}</h2>
                    <p>{p.description.rich_text[0].plain_text}</p>
                </a>
            </Link>
        )
    }
}