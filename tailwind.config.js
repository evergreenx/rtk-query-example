/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}" ,    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B41FF",
        secondary: "#1B153D",
        inputBorder: 'rgba(144, 149, 166, 0.50)'
    },
  }},

  plugins: [],
}

