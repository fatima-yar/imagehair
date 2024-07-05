/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        darkPink: '#653C4B',
        lightGrey: '#EEEEEE',
      },
      backgroundImage: {
        gradientPink: 'linear-gradient(to right, #C4A4A5, #FFEAE5)',
      },
    },
  },
  plugins: [],
}
