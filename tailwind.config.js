/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#283433", // Dark green text
        secondary: "#4D5C4D", // Medium green
        accent: "#B8C8BA", // Light green
        white: "#FFFFFF",
        lightgray: "#F4F4F4",
        black: "#000000",
        gray: "#A3A9AA",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        tenor: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 