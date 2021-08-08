module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './views/index.pug',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
