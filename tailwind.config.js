/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      screens: {
        'xs': '410px',
      },
      colors: {
          // default
        text: "var(--color-text)",
        background: "var(--color-background)",
        footer: "var(--color-footer)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        eirbcolor: "var(--color-eirbcolor)",
      },
      rotate: {
        '18': '18deg',
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
        '2tall': { 'raw': '(min-height: 1000px)' },
      },
    },
  },
  plugins: [],
}
