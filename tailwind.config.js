/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axio-dark': '#0a0e27',
        'axio-navy': '#1a1f3a',
        'axio-pink': '#ff4d8f',
        'axio-purple': '#b64dff',
      },
    },
  },
  plugins: [],
}

