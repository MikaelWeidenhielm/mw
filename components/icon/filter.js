import s from "./icon.module.css"

export default function Filter({ width, height }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        className={s.strokeColor}
        viewBox="0 0 22 20"
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M1 4h20M4 10h14M7 16h8"
        ></path>
      </svg>
    )
}