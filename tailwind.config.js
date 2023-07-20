/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "linear-primary-black": "#0B1223",
        "linear-secondary-black": "#4C4E53",
        "linear-primary-light": "#335FD1",
        "linear-secondary-light": "#4F7FFA",
        "weather-primary": "#00668A",
        "weather-secondary": "#004e71",
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "620px",
        md: "768px",
      },
    },
  },

  plugins: [],
};
