/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        foo: "calc(1em * 2)",
      },
      fontSize: {
        foo: [
          `calc(16px + (48 - 16) * ((100vw - 320px) / (1600 - 320)))`,
          { lineHeight: "1" },
        ],
      },
    },
  },
  plugins: [],
};
