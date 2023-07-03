/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-white': '#F2F2F2',
        'dark-brown': '#402624',
        'light-grey': '#8694A6',
        'light-brown': '#402624'
      },
    },
    fontFamily: {
      sans: ['DOSIyagiMedium', 'sans-serif'],
    },
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
};
