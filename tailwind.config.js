/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axio-dark': '#030712',
        'axio-navy': '#101623',
        'axio-pink': '#F9A8D4',
        'axio-rose': '#F43F5E',
      },
    },
  },
  plugins: [],
}

