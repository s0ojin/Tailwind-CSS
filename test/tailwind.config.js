/** @type {import('tailwindcss').Config} */

const customBorder = {
  3: "3px",
  5: "5px",
  custom: "60px",
};

const customFont = {
  11: "11px",
  12: "12px",
  13: "13px",
  14: "14px",
  15: "15px",
  16: "16px",
  17: "17px",
  18: "18px",
  19: "19px",
  custom: "10rem",
};

const px100 = { ...Array.from(Array(101)).map((_, i) => i + "px") };

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: customBorder,
      fontSize: px100,
    },
  },
  plugins: [],
};
