/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        "rubik-glitch": ["var(--font-rubik-glitch)"],
        averia: ["var(--font-averia)"],
      },
    },
  },
  plugins: [],
};
