/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1EA4CE",
        secondary: "#FAFAFA",
        black500: "#6F6F6F",
        greyscale500: "#697488",
        black600: "#525252",
        black100: "#E0E0E0",
        black300: "#A8A8A8",
      },
      width: {
        15: "60px",
      },
      boxShadow: {
        sm: "0px 4px 24px 0px rgba(93, 62, 188, 0.04)",
      },
    },
  },
  plugins: [],
};
