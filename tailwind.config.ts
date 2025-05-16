import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#52525b",
        light_gray: "#f5f5f5",
        gray_border: "#d4d4d8",
        hover_black: "#e4e4e7",
        hover_white: "#e4e4e7",
        blue: "#3b82f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
