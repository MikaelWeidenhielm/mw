import Link from "next/link";
import slugify from "slugify";

export default function Post({ data }) {
    const p = data.properties;

    if (p.published.checkbox === false) return false

    return (
        <div className="py-sm pr-lg sm:w-full lg:w-1/2" key={data.id}>
            {p.external.checkbox ? 
                <a className="font-medium text-default pb-xs" href={p.link.url} target="_blank">
                    {p.name.title[0].plain_text}
                </a>
            :
                <Link href={`/${slugify(p.name.title[0].plain_text).toLocaleLowerCase()}`}>
                  <a className="font-medium text-default pb-xs">{p.name.title[0].plain_text}</a>
                </Link>
            }
            <p>{p.description.rich_text[0].plain_text}</p>
        </div>
    )
}