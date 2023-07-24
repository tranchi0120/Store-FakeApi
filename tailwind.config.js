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
        'bgr': '#ffffff',
        'gray': 'rgb(82 82 82)',
        'bgr-cart': '#ee4d2d',
        'brand': '#f9f7f7',
        'bgr-footer': '#ebeef2'
      },
      boxShadow: {
        '3xl': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px , rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        'xl': '0 5px 15px rgba(0,0,0,.35)'
      },
      backgroundImage: {
        'bgr-custom-login': "https://images.unsplash.com/photo-1687418850094-8b99dd963da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      gridTemplateColumns: {
        '5': '(3fr,1fr,1fr,1fr,1fr)',
      }
    },
  },
  plugins: [],
}


