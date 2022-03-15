import Link from "next/link";
import Back from "../icon/back";
import Filter from "../icon/filter";
import Moon from "../icon/moon";
import Sun from "../icon/sun";

export default function IconBtn({ type, toggleVisible }) {
    return (
        <button className="p-xs rounded hover:bg-subtle" onClick={toggleVisible && toggleVisible}>
            {type === "moon" && <Moon height={20} width={20} />}
            {type === "sun" && <Sun height={20} width={20} />}
            {type === "back" && <Link href="/"><a><Back height={20} width={20} /></a></Link>}
            {type === "filter" && <Filter height={20} width={20} />}
        </button>
    )
}