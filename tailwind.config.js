import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#172127",
        dark_resaltado: "#1E2B33",
        principal: "#5B9279",
        light_resaltado: "#F0F2F5",
        principal_claro: "#90CB9B",
        light: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
