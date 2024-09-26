/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "app-red": "#F64A4A",
        "app-orange": "#FB7C58",
        "app-yellow": "#F8CD65",
        "app-green": "#A4FFAF",
        "app-white": "#E6E5EA",
        "app-grey": "#817D92",
        "app-dark-grey": "#24232C",
        "app-very-dark-grey": "#18171F",
      }
    },
  },
  plugins: [],
}

