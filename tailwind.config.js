/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkViolet: "#4225F3",
        backgroundColor: "#040114",
      },
      fontFamily:{
        optima: ["Optima LT W02 Roman", "OptimaRoman", "sans-serif"],
        disket: ["Disket Mono", "serif"],
      }
    },
  },
  plugins: [],
};
