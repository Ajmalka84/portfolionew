/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "sm" : "480px"
      }
    },
    fontFamily: {
      nunito : ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

