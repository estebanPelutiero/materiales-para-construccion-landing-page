/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      roboto: ['"Roboto Flex"'],
      cabin: ['Cabin'],
      serif: ['"DM Serif Display"'],
    },

    extend: {
      colors: {
        primaryBg: '#E8EDDF',
        secondBg: '#393E41',
        fontColor: 'white',
      },
    },
  },
  plugins: [],
}