/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'turquoise-900': '#0c1115',
        'turquoise-800': '#191e22',
        'turquoise-700': '#262b31',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
