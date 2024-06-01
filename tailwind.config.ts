import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      height: {},
      margin: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          main: "#1C3672",
          700: "#2E59BD",
          600: "#537AD5",
          500: "#84A0E1",
          400: "#B5C6ED",
          light: "#E6ECF9",
        },
        success: {
          main: "#007F3F",
          700: "#00A351",
          600: "#00C663",
          500: "#00FF80",
          400: "#39FF9C",
          300: "#49E0B8",
          light: "#AAFFD5",
        },
        gray: {
          960: "#090909",
          550: "#7D7D7D",
          540: "#939393",
          530: "#C0C0C0",
          510: "#EDEDED",
          500: "#62626299",
        },
      },
      fontFamily: {
        IranBakh: ["IranSans"],
        Rubik: ["Rubik"],
        IranBakhMedium: ["IranBakh-medium"],
        IranBakhRegular: ["IranBakh-Regular"],
        IranBakh_Heavy: ["IranBakh_Heavy"],
      },
    },
  },
  plugins: [],
};
export default config;
