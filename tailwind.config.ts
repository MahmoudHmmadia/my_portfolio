import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient_cloudy: "linear-gradient(90deg, #fefefe 0%, #dedede 100%)",
        gradient_sky: " linear-gradient(90deg, #2dc1e4 0%, #26a6c3 100%)",
        gradient_sunny: "linear-gradient(90deg, #ffe25a 0%, #ffa852 100%)",
        gradient_dark: "linear-gradient(90deg, #0f161d 0%, #1f2c3a 100%)",
        cool_gradient: "linear-gradient(90deg, #1dcdfe 0%, #34f5c5 100%)",
        alt: "#z-10",
        dark: "#0f161d",
      },
      colors: {
        main: "#1dcdfe",
        alt: "#34f5c5",
        dark: "#0f161d",
        alt_dark: "#2f455c",
      },
      borderColor: {
        main: "#1dcdfe",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
