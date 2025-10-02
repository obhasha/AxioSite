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
        'axio-pink': '#ff4d8f',
        'axio-purple': '#b64dff',
      },
    },
  },
  plugins: [],
}

