module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "weather-primary" : "#00668A",
        "weather-secondary" : "#004E71",
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
