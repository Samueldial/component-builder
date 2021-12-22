module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#312f2f",
          darkDarken: "#131212",
          gray: "#a7a7ab",
          lightGray: "#d9d8d8",
          light: "#f8fafc",
          red: "#e31836",
          orange: "#df6524",
          gree: "#7abe35",
          blue: "#305092"
        }
      },
      fontFamily: {
        light: ["JetBrainsMonoLight"],
        regular: ["JetBrainsMonoRegular"],
        medium: ["JetBrainsMonoMedium"],
        bold: ["JetBrainsMonoBold"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
