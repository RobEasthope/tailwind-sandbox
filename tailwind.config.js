/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        foo: "calc(1em * 2)",
      },
      fontSize: {
        clamp: [
          "clamp(16px, calc(16px + (48 - 16) * ((100vw - 320px) / (1000 - 320))), 48px)",
          { lineHeight: "1" },
        ],
        "16-21px": [
          "clamp(16px, calc(16px + (21 - 16) * ((100vw - 320px) / (1000 - 320))), 21px)",
          { lineHeight: "1" },
        ],
        "24-48px": [
          "clamp(24px, calc(24px + (48 - 24) * ((100vw - 320px) / (1000 - 320))), 48px)",
          { lineHeight: "1", letterSpacing: "0.1em" },
        ],
      },
    },
  },
  plugins: [],
};
