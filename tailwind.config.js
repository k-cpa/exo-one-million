/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        halflings: ["halflings"],
      },
      backgroundImage: {
        'heroBg': "url('../images/hero-image.jpg')",
      },
    },
  },
  plugins: [],
}

