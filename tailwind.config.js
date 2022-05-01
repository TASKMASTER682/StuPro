module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00cdbb',
        success:'#00a79a'
  
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
    },
  },
  },
  
  plugins: [],
}
