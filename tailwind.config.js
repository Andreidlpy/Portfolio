/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'krub': ['"Krub"', 'san-serif'],
        'bruno': ['"Bruno Ace SC"', 'san-serif'],
      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fade 1s ',
      },
      keyframes:{
        wiggle:{
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade:{
          '0%': { opacity: 0},
          '100%': { opacity: 1},
        },
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}