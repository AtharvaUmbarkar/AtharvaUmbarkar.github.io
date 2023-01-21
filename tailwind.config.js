const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xs': { 'raw': '(min-width: 330px)' },
      'xs': { 'raw': '(min-width: 400px)' },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'sec-1': '#1f1d38',
        'sec-2': '#2b2b6a',
        'txt-2': '#5182bf',
        'white': '#fff',
        'white-sec': '#e5e6e6',
        'black': '#262626',
        'blue': '#0ea5e9',
        'blue-sec': '#0c4a6e',
        'yellow': '#fead13',
        'yellow-sec': 'rgba(254, 173, 19, 0.5)',
        'red': '#f81550',
        'red-sec': 'rgba(248, 21, 80, 0.7)',
        'red-sec-2': 'rgba(248, 21, 80, 0.8)',
        'red-sec-3': 'rgba(248, 21, 80, 0.5)',
        'green': '#00ad94',
        'orange': '#e66e3c',

        'black-op': 'rgba(38, 38, 38, 0.85)',


        'blue-op': {
          'full': 'rgba(14, 165, 233, 1)',
          800: 'rgba(14, 165, 233, 0.8)',
          700: 'rgba(14, 165, 233, 0.7)',
          600: 'rgba(14, 165, 233, 0.6)',
          400: 'rgba(14, 165, 233, 0.4)',
          200: 'rgba(14, 165, 233, 0.2)',
        },

        teal: {
          100: "#ccefea",
          200: "#99ded4",
          300: "#66cebf",
          400: "#33bda9",
          500: "#00ad94",
          600: "#008a76",
          700: "#006859",
          800: "#00453b",
          900: "#00231e"
        },

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      boxShadow: {
        'blue-blurred': "0px 0px 10px 1px rgba(14,165,233,1)",
        'red-blurred': "0px 0px 10px 1px rgba(248,21,80,1)",
        'yellow-blurred': "0px 0px 5px 1px rgba(254,173,19,0.75)",
      },
      screens: {
        'sh': { 'raw': '(max-height: 680px)' },
        'lh': { 'raw': '(min-height: 680px)' },

      },
      fontSize: {
        '2xs': '0.625rem',
      }
    },
  },
  plugins: [],
}