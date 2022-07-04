/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        zaxe: '1300px',
      },
      colors: {
        zaxe: '#009ade',
      },
      fontFamily: {
        zaxe: ['Mark'],
      },
    },
  },
  plugins: [],
};
