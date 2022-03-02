const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'very-dark-cyan': 'hsl(183, 100%, 15%)',
      'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
      'dark-grayish-cyan-alt': 'hsl(184, 14%, 56%)',
      'light-grayish-cyan': 'hsl(185, 41%, 84%)',
      'light-grayish-cyan-alt': 'hsl(189, 41%, 97%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    minHeight: {
      'dialog': 'calc(100vh - 10rem)',
    },
    extend: {
      fontFamily: {
        sans: [
          'Space Mono',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  plugins: [],
}
