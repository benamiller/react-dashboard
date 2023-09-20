const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
      green: colors.emerald,
      cyan: colors.cyan,
      blue: colors.sky,
      darkBlue: colors.blue,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      yellow: colors.amber,
      white: colors.white,
      orange: colors.orange,
    },
    extend: {
      fontFamily: {
        main: ["Archivo", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
