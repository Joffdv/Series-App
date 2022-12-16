/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Bebas Neue', 'cursive']
      },
      boxShadow: { 
        '3xl': '0 2px 8px 0 rgba(0, 0, 0, 0.1)', 
      }
    },
  },
  plugins: [],
}