/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm':{
        'min':'425px',
      },
      'md':{
        'min':'768px',
      },
      '2md':{
        'min':'820px',
      },
      'lg':{
        'min':'1024px',
      },
      'xl':{
        'min':'1280px',
      },
      '2xl':{
        'min':'1536px'
      },
      // 'sm':{
      //   'max':'640px',
      // },
      // 'md':{
      //   'max':'768px',
      // },
      // '2md':{
      //   'max':'820px',
      // },
      // 'lg':{
      //   'max':'1024px',
      // },
      // 'xl':{
      //   'max':'1280px',
      // },
      // '2xl':{
      //   'max':'1536px'
      // },
    },
    fontFamily:{
      sans:['Roboto','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}