/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-IBMSans)"],
        serif: ["var(--font-IBMSerif)"],
        mono: ["var(--font-IBMMono)"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        mandarin: {
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
        },
        eggplant: {
          500: "#DB59B2",
          600: "#BA3F93",
          700: "#9A3179",
          800: "#7E2A63",
        },
      },
    },
  },
  plugins: [],
};
