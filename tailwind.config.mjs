/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cantora: ['Cantora One', 'sans-serif'],
        lilita: ['Lilita One', 'sans-serif'],
      },
      colors: {
        darkPink: '#653C4B',
        lightGrey: '#EEEEEE',
        brightPink: '#FF71B5',
        dirtyPink: '#c27fbe',
        darkGrey: '#252525',
        extraLightGrey: '#f7f6f6',
      },
      backgroundImage: {
        gradientPink: 'linear-gradient(to right, #9B797A, #FFEAE5)',
        gradientDown: 'linear-gradient(to bottom, #9B797A, #FFEAE5, #FFFFFF)',
      },
      screens: {
        'md-lg': { min: '1020px', max: '1250px' },
      },
      spacing: {
        55: '55%',
        35: '135px',
        te: '720px',
      },
    },
  },
  plugins: [],
}
