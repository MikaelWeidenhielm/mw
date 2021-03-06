import s from "./icon.module.css"

export default function Logo({ width, height }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={s.fillColor}
        fill="none"
        viewBox="0 0 30 30"
      >
        <path
          d="M0 5c0 2.368.878 4.639 2.44 6.313 1.564 1.675 3.683 2.616 5.893 2.616s4.33-.941 5.893-2.616c1.563-1.674 2.44-3.945 2.44-6.313h-3.33c0 1.421-.528 2.784-1.466 3.79-.938 1.004-2.21 1.57-3.537 1.57-1.326 0-2.598-.566-3.536-1.57C3.859 7.783 3.332 6.42 3.332 5H0z"
        ></path>
        <path
          d="M13.333 5h3.334v14.286h-3.334V5zM0 5h3.333v14.286H0V5z"
        ></path>
        <path
          d="M30 25c0-2.368-.878-4.639-2.44-6.314-1.564-1.674-3.683-2.615-5.893-2.615s-4.33.941-5.893 2.615c-1.563 1.675-2.44 3.946-2.44 6.314h3.33c0-1.421.528-2.784 1.466-3.79.938-1.005 2.21-1.57 3.537-1.57 1.326 0 2.598.566 3.536 1.57.939 1.006 1.466 2.369 1.466 3.79H30z"
        ></path>
        <path
          d="M16.667 25h-3.334V10.714h3.334V25zM30 25h-3.333V10.714H30V25z"
        ></path>
      </svg>
    )
}