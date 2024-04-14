/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'arimo'         : ['Arimo'],
        'rubik'         : ['Rubik'],
        'robotomono'    : ['Roboto Mono'],
        'roboto'        : ['Roboto'],
        'figtree'       : ['Figtree'],
        'spacegrotesk'  : ['Space Grotesk'],
        'worksans'      : ['Work Sans'],
        'leaguespartan' : ['League Spartan'],
        'raleway'       : ['Raleway'],
        'expletussans'  : ['Expletus Sans']
      },

      animation: {
        'mode': 'mode 0.5s 1'
      },

      keyframes: {
        'mode':{
          '0%':{
            transform : 'translateY(50px)'
          },
          '100%':{
            transform : 'translateX(0px)'
          }
        }
      }
    },
  },
  plugins: [],
  darkMode : "class",
}

