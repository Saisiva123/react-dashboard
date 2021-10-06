module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize:{
        'xs': '16px',
        'sm': '14px',
        'tiny': '12px'
    },
    fontWeight:
    {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}