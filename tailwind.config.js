module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#544CC7",
        secondary: "#152C5B",
        "secondary-1": "#1D293F",
        grey1: "#2B2C2E",
        grey2: "#18191F",
        grey3: "#3B3B3E",
        grey4: "#59566B",
        grey5: "#12141D",
        lightblue: "#258AFF",
        lightblue2: "#645CFE",
        lightblue3: "#6F55FF",
        lightblue4: "#5149C6",
        linkblue: "#3E3FD8",
        golden: "#FA4F58",
        heart:"#FF523D",
        lightgrey: "#7D7D7D",
        bglime: "#F8F9FC",
        carton: "#C4C4C4",
        ft: "#52525B",
        fth:"#18181B",
        line:"#DADADA"
      },
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
      //COLORS
      //TYPOGRAPHY
      //RESPONSIVENESS
      //
    },
  },
  plugins: [require("flowbite/plugin")],
};
