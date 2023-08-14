/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'playfair':['Playfair Display', 'serif'],
      'sen': ['Sen', 'sans-serif']
    },
    extend: {
      dropShadow: {
        '3xl': '0px 3px 15.5px rgba(0,0,0,0.14)',
        '4xl': '0px 3px 3.5px rgba(255,255,255,0.16)',
        '5xl': '0px 3px 3.5px rgba(0,0,0,0.16)',
        '6xl': '0px 3px 17.5px rgba(24,106,165,0.1)',
        '7xl': '0px 3px 3.5px rgba(0,0,0,0.16)',
        '8xl': '0px 10px 11.5px rgba(30,98,232,0.24)',
      },
      colors: {
        'lightBlue': '#2289ff',
        'blue': '#14395b',
        'black': '#000000',
      },
      gridTemplateRows: {
        '0': '0fr',
        '1': '1fr'
       },
       transitionProperty: {
         'gridRow': 'grid-template-rows',
         'visibility': 'visibility'
        }
    },
  },
  plugins: [],
}

