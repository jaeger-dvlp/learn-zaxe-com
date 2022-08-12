/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '1300px',
      },
      colors: {
        zaxe: '#009ade',
      },
      fontFamily: {
        zaxe: ['Mark'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
