/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "--primary-100": "#8B5FBF",
        "--primary-200": "#61398F",
        "--primary-300": "#FFFFFF",
        "--accent-100": "#D6C6E1",
        "--accent-200": "#9A73B5",
        "--text-100": "#4A4A4A",
        "--text-200": "#878787",
        "--bg-100": "#F5F3F7",
        "--bg-200": "#E9E4ED",
        "--bg-300": "#FFFFFF;",
      },
    },
  },
  plugins: [],
};
