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
      //larger explicit values 👇
      '90': '90px',
      '100': '100px',
      '300': '300px',
      '400': '400px',
      '600': '600px',
      'full': '100%',
    },
    screens: {
      'sm': '650',
      'lg': '800px',
    },
    colors: {
      default: "#fff",
      neutral: "#333",
      subtle: "#555",
      inverse: "#111",
    },
    textColor: {
      default: "#111",
      neutral: "#333",
      subtle: "#555",
      inverse: "#fff",
    }
  },
  plugins: [],
}
