/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0891b2",
        secondary: "#334155",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
