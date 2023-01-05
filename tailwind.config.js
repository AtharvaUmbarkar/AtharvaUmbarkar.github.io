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
        'txt-1': '#fff',
        'txt-2': '#5182bf',
        'black': '#262626',
        'blue': '#4db5fc',
        'yellow': '#fead13',
        'red': '#ed4039',
        'green': '#20a0ab',
      },
      backgroundImage: {
        'blue-grad': "linear-gradient(315deg, rgba(38,38,38,1) 80%, rgba(77,181,252,0.6505952722886029) 100%)",
        'yellow-grad': "linear-gradient(225deg, rgba(38,38,38,1) 80%, rgba(254,173,19,1) 100%)",
        'red-grad': "linear-gradient(135deg, rgba(38,38,38,1) 80%, rgba(237,64,57,1) 100%)",
        'green-grad': "linear-gradient(45deg, rgba(38,38,38,1) 80%, rgba(32,160,171,1) 100%)",
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