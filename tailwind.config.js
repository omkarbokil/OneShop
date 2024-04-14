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
        'mode': 'mode 1s linear infinite'
      },

      keyframes: {
        'mode':{
          '0%, 100%':{
            transform : 'translateY(10px)'
          },
          '50%':{
            transform : 'translateX(0px)'
          }
        }
      }
    },
  },
  plugins: [],
}

