/** @type {import('tailwindcss').Config} */
export default {
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
        "get-to-know": `url('${
          "roofix-construction" + "../../assets/patterns/get-to-know.jpg"
        }')`,
        services: `url('${
          "roofix-construction" + "../../assets/patterns/services.png"
        }')`,
        "gradient-270": "linear-gradient(270deg, var(--tw-gradient-stops))",
        statistics: `url('${
          "roofix-construction" + "../../assets/home/statistics/statistics.jpg"
        }')`,
        achievement: `url('${
          "roofix-construction" +
          "../../assets/home/achievement/achievement-banner.jpg"
        }')`,
        "achievement-spin": `url('${
          "roofix-construction" + "../../assets/home/achievement/spin.png"
        }')`,
        testimonials: `url('${
          "roofix-construction" +
          "../../assets/home/testimonials/testimonials-bg.jpg"
        }')`,
        blogs: `url('${
          "roofix-construction" + "../../assets/patterns/blogs.png"
        }')`,
        "hero-banner": `url('${
          "roofix-construction" + "../../assets/about/banner.jpg"
        }')`,
        "about-history": `url('${
          "roofix-construction" + "../../assets/about/history/history-bg.png"
        }')`,
        "about-timeline": `url('${
          "roofix-construction" + "../../assets/about/history/timeline.png"
        }')`,
        contact: `url('${
          "roofix-construction" + "../../assets/patterns/contact-bg.png"
        }')`,
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(370px, 1fr))",
        "auto-fit-team-cards": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      animation: {
        spin: "spin 10s linear infinite",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
