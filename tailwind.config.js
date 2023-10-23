/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "core-green": {
        100: "#edf8f2",
        200: "#c8e9d7",
        300: "#a4dbbd",
        400: "#7fcca2",
        500: "#5bbe88",
        600: "#41a46e",
        700: "#338056",
        800: "#245b3d",
        900: "#163725",
      },
      "dark-green": "#1b4332",
      "darker-green": "#081c15",
      "darkest-green": "#07120c",
      lavendar: "#807182",
      beige: "#F2C97E",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      mono: ["Montserrat", "sans-serif"],
      serif: ["Sometype Mono", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
