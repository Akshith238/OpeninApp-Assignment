/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'nunito': ['nunito', 'sans-serif'],
        'figtree': ['Figtree', 'sans-serif'],
      },
      colors:{
        primary:'#605BFF',
        halfwhite: '#F8FAFF',
        greyicon:'#9A9AA9',
        lightgoku: '#F5F5F5',
        lightgohan:'#FFFFFF',
      }
    },
  },
  plugins: [],
}

