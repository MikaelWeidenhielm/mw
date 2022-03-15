const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
      '0': '0px',
      px: '1px',
      xs: '5px',
      sm: '15px',
      md: '30px',
      lg: '50px',
      xl: '80px',
      //larger explicit values 👇
      '90': '90px',
      '100': '100px',
      '200': '200px',
      'full': '100%',
    },
    screens: {
      'sm': '650px',
      'lg': '800px',
    },
    fontSize: {
      lg: "28px",
      md: "22px",
      base: "16px",
      sm: "14px",
    },
    colors: {
      default_transparent: "rgba(255,255,255, 0.5)",
      default: "#fff",
      neutral: "#333",
      subtle: "#f5f5f5",
      inverse: "#111",
    },
    textColor: {
      default: "#111",
      neutral: "#333",
      subtle: "#555",
      inverse: "#fff",
    },
    borderRadius: {
      DEFAULT: '5px',
    },
  },
  plugins: [],
}
