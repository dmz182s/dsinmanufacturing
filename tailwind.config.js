module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#00AFFF',
        secondary: '#4CC9FF',
        accent: '#0F8CE9',
        bgLight: '#F8FBFF',
        textDark: '#0A1A2A',
        softGrey: '#E8EEF5'
      },
      borderRadius: {
        xl: '1.25rem',
        xxl: '2rem'
      }
    }
  },
  plugins: []
}
