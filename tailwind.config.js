const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': [ 'Lora', ...defaultTheme.fontFamily.serif ],
      },
    },
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
      '300': '300px',
      'full': '100%',
    },
    screens: {
      'sm': '650px',
      'lg': '800px',
    },
    fontSize: {
      xl: "48px",
      lg: "36px",
      md: "24px",
      base: "18px",
      sm: "16px",
      xs: "14px",
    },
    colors: {
      default_transparent: "rgba(252, 252, 255, 0.5)",
      inverse_transparent: "rgba(24,24,26,0.5)",
      
      default: "#FCFCFF",
      inverse: "#18181A",

      neutral: "#E1E1E6",
      inverse_neutral: "#313133",

      subtle: "#F0F0F5",
      inverse_subtle: "#252526",
      
    },
    textColor: {
      default: "#252526",
      inverse: "#F0F0F5",
      neutral: "#58585C",
      inverse_neutral: "#B4B4B8",
      subtle: "#6D6D70",
      inverse_subtle: "#8B8B8F",
      disabled: "#B4B4B8",
      inverse_disabled: "#58585C",
    },
    borderRadius: {
      DEFAULT: '5px',
    },
  },
  plugins: [],
}
