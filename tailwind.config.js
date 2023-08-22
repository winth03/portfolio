const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    // plugin(function ({ addComponents, theme }) {
    //   addComponents({
    //     '.card': {
    //         color: theme('colors.white'),
    //         borderRadius: theme('borderRadius.DEFAULT'),
    //         borderColor: theme('colors.black'),
    //         paddingTop: theme('spacing.2'),
    //         paddingBottom: theme('spacing.2'),
    //         paddingLeft: theme('spacing.4'),
    //         paddingRight: theme('spacing.4'),
    //         fontWeight: theme('fontWeight.bold'),
    //         cursor: theme('cursor.pointer'),
    //     },
    //     '.transition-fontsize': {
    //         transitionProperty: 'font-size, line-height',
    //         transitionDuration: '1.5s',
    //         transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    //     }
    //   })
    // }),
  ],
}