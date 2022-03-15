import s from "./nav.module.css"
import Logo from "../icon/logo";
import IconBtn from "../iconBtn";
import Dropdown from "../dropdown";

export default function Nav({title, filter, setFilter, filterType}) {
    return (
      <header className={s.header}>
        {title && <IconBtn type="back" />}          
        <Logo height={30} width={30} />
        <IconBtn type="sun" />
        {title && (
            <>
                <div className="basis-full" />
                <div className="w-full flex items-center justify-between pt-md">
                    <h1 className="font-medium text-default">{title}</h1>
                    {filter && <Dropdown setFilter={setFilter} filterType={filterType} />}
                </div>
                <div className="basis-full mb-[-30px] h-[2px] bg-subtle" />
            </>
        )}
      </header>
    )
  }