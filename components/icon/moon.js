import s from "./icon.module.css"

export default function Moon({ width, height }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={s.fillColor}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.06.509a1 1 0 01-.067 1.085 6.015 6.015 0 008.413 8.413 1 1 0 011.59.896A10.02 10.02 0 119.097.004a1 1 0 01.963.505zm-2.765 1.93a8.019 8.019 0 1010.266 10.266A8.014 8.014 0 017.295 2.439z"
          clipRule="evenodd"
        ></path>
      </svg>

    )
}