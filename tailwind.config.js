/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        halflings: ["halflings"],
      },
      fontSize: {
        '1.2rem': '1.2rem',
      },
      backgroundImage: {
        'heroBg': "url('../images/hero-image.jpg')",
      },
      colors: {
        'primaryColor': "#F74C3D"
      }
    },
  },
  plugins: [],
}

