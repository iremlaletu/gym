/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
      secondary: "Open Sans",
    },
    container: {
      padding: {
        DEFAULT: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1038px",
    },
    extend: {
      colors: {
        primary: {
          100: "#79031D", // p-span
          200: "#F21137",
          300: "#25c870",
        },
        neutral: {
          100: "#ffffff",
          200: "#dedee3",
          300: "#9797a1",
          400: "#595962",
          500: "#131316", //  h1 başlıklar
        },
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner/bannerbg.jpg')",
        faq: "url('/src/assets/img/faq/bg.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        custom: "95%",
      },
    },
  },
  plugins: [],
};
