import s from "./icon.module.css"

export default function Back({ width, height }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={s.strokeColor}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2 10l4.5-5M2 10l4.5 5M2 10h16"
        ></path>
      </svg>
    )
}