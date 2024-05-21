/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        daugava: "url('./img/daugava.jpg')",
      },
    },
  },
  plugins: [],
};
