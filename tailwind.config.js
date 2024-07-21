/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"30rem"
      }
    },
  },
  fontFamily: {
    nunito :["Nunito", "sans-serif"]
  },
  plugins: [],
}

