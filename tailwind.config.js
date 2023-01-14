/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sec-1': '#1f1d38',
        'sec-2': '#2b2b6a',
        'txt-2': '#5182bf',
        'white': '#fff',
        'white-sec': '#e5e6e6',
        'black': '#262626',
        'blue': '#0ea5e9',
        'yellow': '#fead13',
        'red': '#f81550',
        'green': '#00ad94',
        'orange': '#e66e3c',

        'blue-sec': '#0c4a6e',

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

        whit: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
},
      },
      backgroundImage: {
        'blue-grad': "linear-gradient(345deg, rgba(36, 133, 175, 0.3) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(36, 133, 175, 0.3) 100%)",
        'yellow-grad': "linear-gradient(345deg, rgba(254,173,19,0.3) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(254,173,19,0.3) 100%)",
        'red-grad': "linear-gradient(345deg, rgba(248, 21, 80, 0.3) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(248, 21, 80, 0.3) 100%)",
        'green-grad': "linear-gradient(345deg, rgba(0, 173, 148, 0.3) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(0, 173, 148, 0.3) 100%)",
        'landing-grad': "linear-gradient(to right, #2485af, #0090b1, #009bad, #00a5a3, #00ad94)"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      boxShadow: {
        'blue-blurred': "0px 0px 10px 1px rgba(14,165,233,1)",
      },
    },
  },
  plugins: [],
}