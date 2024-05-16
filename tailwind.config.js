/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '8.25xl': '7.25rem',
      },
      letterSpacing: {
        'heavy': '0.2em',
        'heavier': '0.4em',
        'heaviest': '0.3em',
      }
    },
  },
  plugins: [],
}

