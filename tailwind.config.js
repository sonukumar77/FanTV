/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-section1-image":
          "url('https://media.istockphoto.com/id/1372200846/photo/electricity-transmission-towers-with-orange-glowing-wires-against-night-sky.jpg?s=2048x2048&w=is&k=20&c=CXTPGApI6QKoWqzI_87qOl2ac5OoTySgHfuj-AHLCto=')",
      },
      spacing: {
        96: "24rem",
      },
      fontFamily: {
        nohemi: ['"Nohemi"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
