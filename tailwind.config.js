const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        unbounded: ["var(--font-unbounded)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        // Here we define your primary brand color
        primary: {
          DEFAULT: '#8D1A14',
          dark: '#7a1712' // A darker shade for hover effects
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};