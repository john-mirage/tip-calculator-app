const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      '2xs': '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'strong-cyan': 'hsl(172, 67%, 45%)',
      'very-dark-cyan': 'hsl(183, 100%, 15%)',
      'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
      'dark-grayish-cyan-alt': 'hsl(184, 14%, 56%)',
      'light-grayish-cyan': 'hsl(185, 41%, 84%)',
      'light-grayish-cyan-alt': 'hsl(189, 41%, 97%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      fontFamily: {
        sans: [
          'Space Mono',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      minHeight: {
        'dialog': 'calc(100vh - 10rem)',
      },
    },
  },
  plugins: [],
}
