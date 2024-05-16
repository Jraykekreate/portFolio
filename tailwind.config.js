/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      primaryText: "#161C2D",
      primaryBackground: "#f8f8ff",
      secondaryText: "#6E06F2",
    },
  },
  plugins: [],
};
