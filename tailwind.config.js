/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1140px" },
      md: { max: "600px" },
      sm: { max: "499px" },
    },
  },
  plugins: [],
};
