/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
      fontSize: {
        '1.2rem': '1.2rem',
        '1.5rem': '1.5rem',
      },
      backgroundImage: {
        'heroBg': "url('../images/hero-image.jpg')",
      },
      colors: {
        'primaryColor': "#F74C3D",
        'bgNav': '#222222'
      },

    },
  },
  plugins: [],
}

