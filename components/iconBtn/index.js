import Link from "next/link";
import Back from "../icon/back";
import Filter from "../icon/filter";
import Moon from "../icon/moon";
import Sun from "../icon/sun";

export default function IconBtn({ type, toggleVisible }) {
    if(type === "back") return <Link href="/"><a className="p-xs rounded hover:bg-subtle dark:hover:bg-inverse_subtle"><Back height={20} width={20} /></a></Link>
    else {
        return (
            <button className="p-xs rounded hover:bg-subtle dark:hover:bg-inverse_subtle" onClick={toggleVisible && toggleVisible}>
                {type === "moon" && <Moon height={20} width={20} />}
                {type === "sun" && <Sun height={20} width={20} />}
                {type === "filter" && <Filter height={20} width={20} />}
            </button>
        )
    }
}