import Link from "next/link";
import slugify from "slugify";

import s from './post.module.css'

export default function Post({ data }) {
    const p = data.properties;

    if (p.published.checkbox === false) return false

    if (p.external.checkbox) {
        return (
            // <a className={`${s.link} py-sm pr-lg sm:w-full lg:w-1/2`}
            <a className={`${s.link} mb-sm sm:w-full lg:w-300`}
                href={p.link.url}
                rel="noreferrer"
                target="_blank"
                >
                    <h2 className="font-medium text-default dark:text-inverse">{p.name.title[0].plain_text}</h2>
                    <p className="text-neutral dark:text-inverse_neutral">{p.description.rich_text[0].plain_text}</p>
                    <hr className={s.line} />
            </a>
        )
    } else {
        return (
            <Link href={`/${slugify(p.name.title[0].plain_text, {lower: true})}`}>
                <a className={`${s.link} mb-sm sm:w-full lg:w-300`}>
                    <h2 className="font-medium text-default dark:text-inverse">{p.name.title[0].plain_text}</h2>
                    <p className="text-neutral dark:text-inverse_neutral">{p.description.rich_text[0].plain_text}</p>
                    <hr className={s.line} />
                </a>
            </Link>
        )
    }
}