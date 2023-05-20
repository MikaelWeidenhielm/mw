import Link from "next/link";

export default function ListItem({post} = props) {
    const { id, title } = post;
  return (
    <li>
        <Link href={`${id}`} >{title}</Link>
    </li>
  )
}
