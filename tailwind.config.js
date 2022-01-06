module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme:'#2a2a2a',
        first:'#5f9ea0'
      },
      fontFamily:{
        merr:["Merriweather", "serif"],
        pt:["PT Sans", "sans-serif"],
        vus:["Vujahday Script", "cursive"]
      },
    },
    screens: {
      '4xl': {'max': '3840px'},
      // => @media (max-width: 2048px) { 4K }
      
      '3xl': {'max': '2560px'},
      // => @media (max-width: 2048px) { 2K }

      '2xl': {'max': '1920px'},
      // => @media (max-width: 1535px) { 1080p }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { 720p }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  listStyleType: {
    none: 'none',
    square: 'square',
    roman: 'upper-letters',
  },
  plugins: [],
}
