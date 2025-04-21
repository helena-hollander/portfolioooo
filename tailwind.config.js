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
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        darkest: '#0E183D',
        lightest: '#FFFCF8',
        lightContrast: '#2126cf',
        strongContrast: '#1f25e0',
      },
      backgroundImage: {
        scribbleWorkHover: ["url('/images/scribbles/work_hover_blue.png')"],
        scribbleAboutHover: ["url('/images/scribbles/contact_hover_blue.png')"],
        scribbleContactHover: ["url('/images/scribbles/about_hover_blue.png')"],
      },
      fontSize:{
        displaySizeMobile: '1.25rem',
        bodySizeMobile: '0.875rem',
        descriptionSizeMobile:'0.625rem',
        displaySize: '2rem',
        bodySize: '1.5rem',
        descriptionSize: '1.125rem',
        //De her er udgået:
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
  corePlugins: {
    cursor: false, // Disable Tailwind's cursor utilities
  },
  plugins: [],
}