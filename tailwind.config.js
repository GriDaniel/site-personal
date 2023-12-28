/** @type {import('tailwindcss').Config} */


export default {

  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      '280': '280px',
      '380': '380px',
      '500': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max':'1920px',
    },


    extend: {
      fontFamily: {
        abel: ["Abel", 'sans-serif'],
        source: ["Source Code Pro", 'monospace'],
        fjalla: ["Fjalla One", 'sans-serif'],
        anaheim: ['Anaheim', 'sans-serif'],
        noto: ['Noto Sans Georgian', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      }

    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),

  ],

}


