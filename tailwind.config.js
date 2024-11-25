/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900 _01": "var(--black_900_01)",
          "900_3f": "var(--black_900_3f)",
          "900_99": "var(--black_900_99)",
        },
        blue_gray: { 900: "var(--blue_gray_900)" },
        deep_orange: { 300: "var(--deep_orange_300)" },
        deep_purple: {
          a200: "var(--deep_purple_a200)",
          a200_19: "var(--deep_purple_a200_19)",
          a200_33: "var(--deep_purple_a200_33)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_33: "var(--white_a700_33)",
          a700_4c: "var(--white_a700_4c)",
          a700_66: "var(--white_a700_66)",
          a700_99: "var(--white_a700_99)",
        },
      },

      boxShadow: { xs: "0 4px 4px 0 #0000003f" },
      fontFamily: { plusjakartasans: "Plus Jakarta Sans", karla: "Karla" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #6a41fb,#f49957)",
        gradient1: "linear-gradient(180deg, #a41fb,#6a41fb19)",
        gradient2: "linear-gradient(92deg, #6a41fb,#f49957)",
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
