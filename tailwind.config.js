/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "var(--sf-primary)",
  secondary: "var(--sf-secondary)",
  tertiary: "var(--sf-tertiary)",
  black: "var(--sf-black)",
  white: "var(--sf-white)",
  error: "var(--sf-error)",
  warning: "var(--sf-warning)",
  success: "var(--sf-success)",
  transparent: "var(--sf-transparent)",
  grey: "var(--sf-grey)",
};

const fontWeight = {
  light: "var(--sf-font-light)",
  regular: "var(--sf-font-regular)",
  medium: "var(--sf-font-medium)",
  semibold: "var(--sf-font-semibold)",
  bold: "var(--sf-font-bold)",
};

const fontSize = {
  h1: "var(--sf-text-h1)",
  h2: "var(--sf-text-h2)",
  h3: "var(--sf-text-h3)",
  h4: "var(--sf-text-h4)",
  h5: "var(--sf-text-h5)",
  h6: "var(--sf-text-h6)",
  p: "var(--sf-text-p)",
};

const container = {
  center: true,
  padding: "calc(var(--sf-gutter-x) / 2)",
};

const screens = {
  xs: { max: "576px" },
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
  xxxl: "1600px",
  laptop: { min: "1200px", max: "1450px" },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    fontWeight,
    container,
    screens,
    extend: {
      fontSize,
    },
  },
  plugins: [],
};
