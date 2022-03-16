module.exports = {
  darkMode: 'class',
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
      default_transparent: "rgba(250,250,252, 0.5)",
      default: "#FAFAFC",
      neutral: "#656567",
      subtle: "#E6E6E6",
      inverse_subtle: "#333333",
      inverse: "#1B1B1B",
      inverse_transparent: "rgba(27,27,27,0.5)",
    },
    textColor: {
      default: "#1B1B1B",
      neutral: "#656567",
      subtle: "#BEBEC0",
      iverse_neutral: "#d9d9d9",
      inverse_subtle: "#555555",
      inverse: "#FAFAFC",
    },
    borderRadius: {
      DEFAULT: '5px',
    },
  },
  plugins: [],
}
