module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          darkest: "#7e343e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
