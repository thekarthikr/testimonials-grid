module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
     colors:{
      Moderateviolet: 'hsl(263, 55%, 52%)',
      DarkGrayishBlue: 'hsl(217, 19%, 35%)',
      DarkBlackishBlue: 'hsl(219, 29%, 14%)',
      LightGray: 'hsl(0, 0%, 81%)',
      LightGrayishBlue: 'hsl(210, 46%, 95%)'
     },

      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
