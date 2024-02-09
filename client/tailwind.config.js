/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ftbg:" #030303",
        bg: "#F5F6FA",
        txt: "#0D0E11",
        pri: "#5663F0",
        sec: "#E9E9E9",
        acc: "#4A59FC",
      },
      screens: {
        "max-lg": {max : "1200px"},
        "max-md" : {max: "680px"},
      }
    },
  },
  plugins: [],
}
