/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '10vh',
        '90vh': '90vh',
        '70vh': '70vh',
        '30vh': '30vh',
      },
      padding: {
        '10%': '10%',
      }
    
    },
  },
  plugins: [],
}

