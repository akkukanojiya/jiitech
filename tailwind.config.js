/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    
    extend: {

     clipPath: {
        tree: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
      colors: {
        customBlue: '#b6002c',
        customLiteBlue: '#D01343',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
