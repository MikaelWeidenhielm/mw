import s from "./nav.module.css"
import Logo from "../icon/logo";
import IconBtn from "../iconBtn";
import Dropdown from "../dropdown";

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import Sun from "../icon/sun";
import Moon from "../icon/moon";

export default function Nav({title, filter, setFilter, filterType}) {
  const { systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <button className="p-xs rounded hover:bg-subtle dark:hover:bg-inverse_subtle" onClick={() => setTheme('light')}>
          <Sun width={20} height={20} />
        </button>
      )
    } else {
      return (
        <button className="p-xs rounded hover:bg-subtle dark:hover:bg-inverse_subtle" onClick={() => setTheme('dark')}>
          <Moon width={20} height={20} />
        </button>
      )
    }
  }

    return (
      <header className={s.header}>
        {title && <IconBtn type="back" />}          
        <Logo height={30} width={30} />
        {renderThemeChanger()}
        {title && (
            <>
                <div className="basis-full" />
                <div className="w-full flex items-center justify-between pt-md">
                    <h1 className="font-medium text-default dark:text-inverse">{title}</h1>
                    {filter && <Dropdown setFilter={setFilter} filterType={filterType} />}
                </div>
                <div className="basis-full mb-[-30px] h-[2px] bg-subtle dark:bg-inverse_subtle" />
            </>
        )}
      </header>
    )
  }