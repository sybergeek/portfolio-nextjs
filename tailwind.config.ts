import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans]
      },
      colors: {
        dark: "#101820",
        light: "#f8f7f4",
        primary: "#ef6f51",
        primaryDark: "#8ee3d0",
        ink: "#101820",
        paper: "#f8f7f4",
        accent: "#ef6f51",
        mint: "#8ee3d0",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(16,24,32,0.13) 1px,#f8f7f4 3px,#f8f7f4 100px);',
        circularLightMd: 'repeating-radial-gradient(rgba(16,24,32,0.13) 1px,#f8f7f4 3px,#f8f7f4 80px);',
        circularLightSm: 'repeating-radial-gradient(rgba(16,24,32,0.13) 1px,#f8f7f4 3px,#f8f7f4 60px);',
      },
    },
  },
  plugins: [],
};
export default config;
