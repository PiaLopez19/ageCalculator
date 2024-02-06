/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } ,
    extend: {
      colors:{
        // Colores Primarios
        purple: '#7F3FBF',
        lightRed: '#FF5959',

        // Colores Neutrales
        white: '#FFFFFF',
        offWhite: '#F0F0F0',
        lightGrey: '#D9D9D9',
        smokeyGrey: '#6E6E6E',
        offBlack: '#141414',
      }

    },
  },
  plugins: [],
}