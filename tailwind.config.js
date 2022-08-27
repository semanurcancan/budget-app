/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px'},
    extend: {
      colors: {
        'yellow1': '#FFF38C',
        'yellow2': '#F0E161',
        'yellow3': '#D9CB50',
        'yellow4': '#C0B236',
        'white1': '#F6F5F5',
        'white2': '#FFFFFF',
        'blue1': '#D3E0EA',
        'blue3': '#B2C8DF',
        'grey1':'#EEEEEE'

        
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
      
    
    },
  },
  plugins: [],
}
