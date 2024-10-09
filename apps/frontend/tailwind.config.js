/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "daisy-",
  },
};
