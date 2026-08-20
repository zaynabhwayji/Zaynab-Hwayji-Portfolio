/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F4",
          100: "#F6F1EA",
          200: "#EFE6DA",
        },
        blush: {
          50: "#FDF5F3",
          100: "#FAE8E3",
          200: "#F4D2C9",
          300: "#EBB4A6",
          400: "#DD9583",
          500: "#C97766",
        },
        rose: {
          50: "#FBF4F2",
          100: "#F5E2DD",
          200: "#EAC9C0",
          300: "#D9A89B",
          400: "#C08776",
          500: "#A56B59",
        },
        lavender: {
          50: "#F7F5FB",
          100: "#EDE7F6",
          200: "#DCCDEE",
          300: "#C4ABDF",
          400: "#A988CD",
          500: "#8E6BBA",
        },
        sage: {
          50: "#F5F7F3",
          100: "#E7ECE2",
          200: "#CFD9C6",
          300: "#A9BC9B",
          400: "#859D74",
          500: "#677F57",
        },
        charcoal: {
          50: "#F2F2F1",
          100: "#E2E2E0",
          200: "#C4C4C1",
          300: "#9A9A96",
          400: "#6E6E69",
          500: "#4A4A45",
          600: "#33332F",
          700: "#242420",
          800: "#1A1A17",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(74, 74, 69, 0.06), 0 1px 4px -1px rgba(74, 74, 69, 0.04)",
        card: "0 4px 24px -6px rgba(74, 74, 69, 0.08), 0 2px 8px -2px rgba(74, 74, 69, 0.05)",
        elevated: "0 12px 40px -8px rgba(74, 74, 69, 0.12), 0 4px 12px -4px rgba(74, 74, 69, 0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
