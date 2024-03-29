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
        bg: '#F5F6FA',
        altBg: '#e9e9e9',
        darkBg: '#2b2a2e',
        txt: '#0D0E11',
        pri: '#5663F0',
        sec: '#E9E9E9',
        acc: '#24597A', // former 4A59FC
      },
      // acc #24597A
      // bg #D9DDDC
      // sec #000
      screens: {
        'max-lg': { max: '1200px' },
        'max-md': { max: '680px' },
        md: '681px',
      },
    },
  },
  plugins: [],
};
