/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        trispace: ['Trispace', 'mono'],
      },
      colors: {
        darkest: '#0404FF',
        lightest: '#FCFFFD',
        lightContrast: '#CEE3FF'
      },
      backgroundImage: {
        scribbleWorkHover: ["url('/images/scribbles/scribbleWorkHover.png')"],
        scribbleContactHover: ["url('/images/scribbles/scribbleContactHover.png')"],
        scribbleAboutHover: ["url('/images/scribbles/scribbleAboutHover.png')"],
      },
      fontSize:{
        displaySizeMobile: '2.3rem',
        contextSizeMobile: '0.85rem',
        contactSizeWeb: '2.3rem',
        displayContact: '2.6rem',

      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    
  },
  plugins: [],
}