/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontSize: {
      font: "15px",
    },
    fontWeight: {
      regular: 500,
      bold: 700,
    },
    colors: {
      // Primary
      dark_cyan: "hsl(180, 29%, 50%)",
      // Neutral
      light_grayish_cyan_bg: "hsl(180, 52%, 96%)", //Background
      light_grayish_cyan_filter: "hsl(180, 31%, 95%)", //Filter Tablets
      dark_grayish_cyan: "hsl(180, 8%, 52%)",
      very_dark_grayish_cyan: "hsl(180, 14%, 20%)",
    },
    extend: {},
  },
  plugins: [],
};
