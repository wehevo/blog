/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '2.5rem',
        '8.25xl': '7.25rem',
      },
      letterSpacing: {
        'heavy': '0.2em',
        'heavier': '0.4em',
        'heaviest': '0.3em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      minWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}

