import s from "./icon.module.css"

export default function Forward({ width, height }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={s.strokeNeutral}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 10l-4.5 5m4.5-5l-4.5-5m4.5 5H2"
        ></path>
      </svg>
    )
}
