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
        lightest: '#FCFFFD'
      },
      backgroundImage: {
        scribbleWork: ["url('/images/scribbles/scribbleWork.png')"],
        scribbleWorkHover: ["url('/images/scribbles/scribbleWorkHover.png')"],
        scribbleContactHover: ["url('/images/scribbles/scribbleContactHover.png')"],
        scribbleAboutHover: ["url('/images/scribbles/scribbleAboutHover.png')"],
      },
    },
  },
  plugins: [],
}