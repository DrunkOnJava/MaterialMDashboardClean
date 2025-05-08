/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bmw-blue': '#00406E',
        'bmw-light-blue': '#C5E0F5',
        'bmw-accent': '#C27637',
        'bmw-light-accent': '#FFE2C3',
        'bmw-dark': '#1A2833',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}