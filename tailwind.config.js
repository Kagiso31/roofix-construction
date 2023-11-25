/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#ee212b",
      },
      screens: {
        "md+": "900px",
      },
      boxShadow: {
        "feature-icon": "0px 21px 32px 0px rgba(238, 33, 43, 0.33)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
