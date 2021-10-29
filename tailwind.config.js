const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pop: " 'Poppins', sans-serif ",
        sans: ["'Open Sans', sans-serif;", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "5xl": ["3rem", "3.4rem"],
      },
      colors: {
        blue: {
          400: "#7770FF",
          DEFAULT: "#564EFF",
          600: "#5147FF",
          700: "#3D33FF",
        },
        primary: "#333333",
        "primary-dark": "#21262f",
        secondary: "#",
        "secondary-dark": "#",
      },
      rotate: {
        135: "135deg",
        "-135": "-135deg",
      },
      screens: {
        xs: "360px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
