import s from "./dropdown.module.css"
import { useState, useEffect, useRef } from 'react';
import IconBtn from '../iconBtn';
import Check from "../icon/check";

export default function Dropdown({ setFilter, filterType }) {
    const [isVisible, toggleVisible] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref, () => toggleVisible(false));

    // useEffect(() => {
    //     toggleVisible(false)
    //   }, [filterType])

    return (
        <div ref={ref}>
            <IconBtn type="filter" toggleVisible={() => toggleVisible(prev => !prev)} />
            {isVisible && (
                <div className={s.dropdown}>
                    <p>Style</p>
                    <button 
                        className={filterType.style === "all" ?  s.active : s.inactive}
                        onClick={() => setFilter({style: "all", price: filterType.price})}>
                            {filterType.style === "all" && <div className="mr-xs"><Check width={15} height={15}/></div>}
                            All
                     </button>
                    <button 
                        className={filterType.style === "sans" ?  s.active : s.inactive}
                        onClick={() => setFilter({style: "sans", price: filterType.price})}>
                            {filterType.style === "sans" && <div className="mr-xs"><Check width={15} height={15}/></div>}
                            Sans
                    </button>
                    <button
                        className={filterType.style === "serif" ?  s.active : s.inactive}
                        onClick={() => setFilter({style: "serif", price: filterType.price})}>
                            {filterType.style === "serif" && <div className="mr-xs"><Check width={15} height={15}/></div>}
                            Serif
                    </button>
                    <p>Price</p>
                    <button
                        className={filterType.price === "all" ?  s.active : s.inactive}
                        onClick={() => setFilter({style: filterType.style, price: "all"})}>
                            {filterType.price === "all" && <div className="mr-xs"><Check width={15} height={15}/></div>}
                            All
                    </button>
                    <button 
                        className={filterType.price === "free" ?  s.active : s.inactive}
                        onClick={() => setFilter({style: filterType.style, price: "free"})}>
                            {filterType.price === "free" && <div className="mr-xs"><Check width={15} height={15}/></div>}
                            Free
                    </button>
                    <button
                        className={filterType.price === "paid" ?  s.active : s.inactive} 
                        onClick={() => setFilter({style: filterType.style, price: "paid"})}>
                            {filterType.price === "paid" && <div className="mr-xs"><Check width={15} height={15}/></div>}
                            Paid
                    </button>
                </div>
            )}
        </div>
    )
}

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }