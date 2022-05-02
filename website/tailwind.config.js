/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./public/index.html', './src/components/**/*.js'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Charter', 'sans-serif'],
    },
    colors: {
      amber: colors.amber,
      black: '#000',
      blue: colors.blue,
      bluegray: colors.slate,
      coolgray: colors.gray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      lightblue: colors.sky,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      truegray: colors.neutral,
      violet: colors.violet,
      warmgray: colors.stone,
      white: '#fff',
      yellow: colors.yellow,
    },
    extend: {},
  },
  variants: {
    border: ['focus-visible'],
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
