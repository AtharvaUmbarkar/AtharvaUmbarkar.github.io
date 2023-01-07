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
        'black': '#262626',
        'blue': '#2485af',
        'yellow': '#fead13',
        'red': '#f81550',
        'green': '#00ad94',
        'orange': '#e66e3c',
      },
      backgroundImage: {
        'blue-grad': "linear-gradient(345deg, rgba(36, 133, 175, 0.6) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(36, 133, 175, 0.6) 100%)",
        'yellow-grad': "linear-gradient(345deg, rgba(254,173,19,0.6) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(254,173,19,0.6) 100%)",
        'red-grad': "linear-gradient(345deg, rgba(248, 21, 80, 0.6) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(248, 21, 80, 0.6) 100%)",
        'green-grad': "linear-gradient(345deg, rgba(0, 173, 148, 0.6) 0%, rgba(38,38,38,1) 15%, rgba(38,38,38,1) 85%, rgba(0, 173, 148, 0.6) 100%)",
        'landing-grad': "linear-gradient(to right, #2485af, #0090b1, #009bad, #00a5a3, #00ad94);"
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}