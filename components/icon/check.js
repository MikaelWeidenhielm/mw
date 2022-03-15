import s from "./icon.module.css"

export default function Check({ width, height }) {
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
          d="M16 6l-8.25 8L4 10.364"
        ></path>
      </svg>
    )
}