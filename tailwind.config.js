/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Bebas Neue',
        graph: 'Poppins'
      },
      colors: {
        dark: '#111',
        red: '#D91F27',
      }
    },
  },
  plugins: [],
}
