/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx"],
  theme: {
    extend: {
      colours: {
        "weather-primary" : "#0068A",
        "weather-secondary": "#004E71",
      },
    },
  },
  plugins: [],
}

