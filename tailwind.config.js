/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/**/*.html', '*.html', '*js'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('/images/image-hero-mobile.jpg')",
        'desktop': "url('/images/image-hero-desktop.jpg')",
      },
      colors: {
        ModerateCyan: "#3cb4ac",
        DarkCyan: "#147b74", 
        DarkGray: "#7a7a7a"
      },
      opacity: {
        '2': '0.02', 
        '3': '0.03', 
        '4': '0.04', 
      },
    },
  },
  plugins: [],
}

