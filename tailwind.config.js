/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        cabinSketch: ["Cabin Sketch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
