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
        'white': '#ffffff',
        'black': '#000000',
        'red-bold': '#d0011b',
        'bgr': 'rgb(245 245 245)',
        'gray': 'rgb(82 82 82)',
        'bgr-cart': '#ee4d2d'
      },
      boxShadow: {
        '3xl': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px , rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      }
    },
  },
  plugins: [],
}


