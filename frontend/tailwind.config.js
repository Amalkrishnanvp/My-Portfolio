// import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./views/**/*.hbs"],
  theme: {
    extend: {
      colors: {
        "color-1": "#003566",
      },
    },
  },
};

export default config;
