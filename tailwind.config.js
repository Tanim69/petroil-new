
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1144px',
      },
      colors:{
        'primary':'#F40404',
        'secondary':'#6C6C6C',
        'white':'#FFFFFF',
        'overlay': 'rgba(0, 0, 0, 0.60)',
        'imgboxbtn': 'rgba(255, 255, 255, 0.50)',

        
        
      },
      backgroundImage: {
        'banner':"url('./src/assets/banner.png')",
        'serviceone': "url('./src/assets/services.png')",
        'company': "url('./src/assets/company.png')",
        'picone': "url('./src/assets/pic1.png')",
        'pictwo': "url('./src/assets/pic2.png')",
        'picthree': "url('./src/assets/pic3.png')",
        
      },

    },
  },
  plugins: [],
}