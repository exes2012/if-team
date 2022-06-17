/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      blue: {
        100: "#E7ECFD",
        200: "#9BB0F8",
        300: "#7592F5",
        400: "#2956EF",
        500: "#113FDF",
        600: "#0E35B9",
        700: "#0B2A93",
        800: "#081F6D",
        900: "#020B29",
      },
      gray: {
        100: "#F3F5F9",
        200: "#E1E3E9",
        300: "#C7CAD6",
        400: "#ACB2C3",
        500: "#77809C",
        600: "#616985",
        700: "#4D546A",
        800: "#3A3F4F",
        900: "#303039",
      },
      green: {
        100: "#E7F4E6",
        200: "#D7EBD5",
        300: "#B9DDB6",
        400: "#9BCE97",
        500: "#5FB158",
        600: "#4C9546",
        700: "#3C7637",
        800: "#2C5729",
        900: "#1C371A",
      },
      red: {
        100: "#FEE9E9",
        200: "#FECBCB",
        300: "#FDADAD",
        400: "#FC8F8F",
        500: "#FB5353",
        600: "#FA3535",
        700: "#FA1717",
        800: "#ED0606",
        900: "#CF0505",
      },
      orange: {
        100: "#FFF2EC",
        200: "#FBC5A8",
        300: "#FAB28B",
        400: "#F99E6E",
        500: "#F67733",
        600: "#F56316",
        700: "#E2550A",
        800: "#C54A09",
        900: "#A73F07",
      },
      purple: {
        100: "#DDDFEF",
        200: "#C2C5E1",
        300: "#A6ABD4",
        400: "#8B91C7",
        500: "#545DAC",
        600: "#464E91",
        700: "#393F75",
        800: "#2C305A",
        900: "#1E223E",
      },
      aqua: {
        100: "#ECF8FC",
        200: "#88D2EA",
        300: "#65C5E4",
        400: "#43B8DE",
        500: "#1F8DB0",
        600: "#19718D",
        700: "#13556B",
        800: "#0D3A48",
        900: "#071E25",
      },
      pink: {
        100: "#FAF3FD",
        200: "#EED1F8",
        300: "#E1ADF3",
        400: "#D489EE",
        500: "#BA42E4",
        600: "#AC20DE",
        700: "#911BBA",
        800: "#751596",
        900: "#591072",
      },
    },
    screens: {

      "3xl": { max: "1840px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },

    },
    fontFamily: {
      sans: "Rubik, Arial, sans-serif",
    },

    extend: {
      spacing: {
        3.75:'0,9375rem',//15px
        7.5:'1.875rem', //30px
        13: "3.125rem",
        15: "3.75rem",
        90:'22.5rem', //360px
        105: "26.25rem",
      },

      fontSize: {
        tiny: "0.625rem",
      },
      backgroundPosition: {
        "left-5.5": "1.375rem",
      },
      boxShadow: {
        dropdown: "0px 4px 20px rgba(165, 170, 189, 0.3)",
      },
    },
  },
  plugins: [],
};
