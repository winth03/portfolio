const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.transition-fontsize': {
            transitionProperty: 'font-size, line-height',
            transitionDuration: '1.5s',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
      })
    }),
  ],
}