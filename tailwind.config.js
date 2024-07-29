/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#2563eb",
      },
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        cabinSketch: ["Cabin Sketch", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('src/assets/images/hero-test-copy.jpg')",
        loginBg:
          "linear-gradient(rgb(37, 99, 235, 0.8), rgb(37, 99, 235, 0.8)), url('src/assets/images/login.jpg')",
      },
    },
  },
  plugins: [],
};
