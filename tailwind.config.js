/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",
];
export const theme = {
  extend: {
    fontFamily: {
      chillax: ["Chillax", "sans-serif"],
      archivo: ["Archivo", "sans-serif"],
    },
    borderRadius: {
      "4xl": "32px",
      "5xl": "52px",
    },
    colors: {
      "black-gray": "#7E7E7E",
      "gray-white": "#C3C3C3",
      "black": "#1D1D1D",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
export const plugins = [];
