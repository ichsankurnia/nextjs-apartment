module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
        quattrocentoSans: ['QuattrocentoSans-Regular'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'soft': '#f5f5f5',
        'chocolate-900': '#241b18',
        'chocolate-500': '#4b3a33',
        'chocolate-300': '#ab7d0f',
        'chocolate-100': '#e2b241',
        'grey': '#7b7b7b'
      }
    },
  },
  plugins: [],
}
