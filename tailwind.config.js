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
        "feature-icon": "0px 21px 32px 0px #ee212b54",
      },
      backgroundImage: {
        "gradient-270": "linear-gradient(270deg, var(--tw-gradient-stops))",
        statistics: `url('${
          "roofix-construction" + "../../assets/home/statistics/statistics.jpg"
        }')`,
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
