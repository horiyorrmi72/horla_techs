/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "640px" },
      },
      colors: {
        contact_color: "#7e0be6",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      playwrite: ["Playwrite CO Guides", "cursive"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
