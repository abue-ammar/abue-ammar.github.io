/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "system-ui", "sans"],
    },
    extend: {
      colors: {
        dark: "#000",
        white: "#fff",
        lightText: "#76797d",
      },
    },
  },
  plugins: [],
};
