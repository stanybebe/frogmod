/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["inter", "ui-sans-serif", "system-ui"],
      mono: ["milli", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        cream: "#fff9eb",
        frog: "#70ff38",
        purple: "#cd5aff",
        yellow: "#f5c410",
        neutral: "#fcfcfc",
        blue: "#050399",
        green: "#0e7e6b",
        charcoal: "#333333",
        red: "#fe3330",
      },
    },
  },
  plugins: [],
};
