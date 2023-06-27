/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      popins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'orange': '#ff7337',
        'white': '#ffffff',
        'black': '#000000',
        'red-bold': '#d0011b',
        'bgr': 'rgb(245 245 245)',
        'gray': 'rgb(82 82 82)',
      },
    },
  },
  plugins: [],
}