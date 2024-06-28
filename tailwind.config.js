const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxl: { min: '1920px' },

      '2xl': { max: '1660px' },

      xl: { max: '1440px' },

      lg: { max: '960px' },

      md: { max: '760px' },

      sm: { max: '540px' },
    },
    extend: {
      backgroundColor: {
        SiteColor: '#0B1D26',
        RegColor: '#04081d',
      },
      fontFamily: {
        gilroy: ['gilroy', 'sans-serif'],
        gilroyBold: ['gilroy', 'sans-serif'],
        gilroyHeavy: ['gilroy', 'sans-serif'],
        chronicle: ['chronicle display', 'cursive'],
      },
      fontWeight: {
        gilroy: '400',
        gilroyBold: '600',
        gilroyHeavy: '900',
      },
      letterSpacing: {
        widest: '0.3rem',
      },
      fontSize: {
        medium: '56px',
        notBig: '72px',
        big: '88px',
        xxlBig: '100px',
        mdBig: '200px',
        lgBig: '230px',
        superBig: '258px',
      },
      fill: {
        RegColor: '#04081d',
      },
      backgroundImage: {
        topSite:
          "linear-gradient(to top left, rgba(0, 29, 38, 0.3) 60%, rgba(11, 29, 38, 0.5 ) 69%, rgba(11, 29, 38, 1) 100%), linear-gradient(to bottom, rgba(0, 29, 38, 0.3) 60%, rgba(11, 29, 38, .8 ) 69%, rgba(11, 29, 38, 1 ) 79%), url('../public/png/MNTN.png')",
        formContainerSite:
          'linear-gradient(to top right, rgba(0, 19, 38,.9) 60%, rgba(0, 18, 36, .9 ) 70%)',
        formSite:
          "linear-gradient(to top left, rgba(0, 0, 38, 0.3) 60%, rgba(11, 18, 38, 0.5 ) 69%, rgba(11, 19, 38, 1) 110%),linear-gradient(to bottom, rgba(0, 29, 38, 0.3) 60%, rgba(11, 29, 38, .4 ) 69%, rgba(11, 29, 48, .6 ) 79%), url('../public/png/formImg.jpg')",
        registerSite: '',
      },
      height: {
        medium: '400px',
        big: '1200px',
      },
      margin: {
        big: '700px',
      },
    },
  },
  plugins: [],
};
