/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-light': '#4A4848',
        'custom-dark': '#252525',

      }
    },
  },
  plugins: [],
}