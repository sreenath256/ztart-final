/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '380px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl' : '1500px'},
       
   extend: {
     colors:{
       'visaclr': '#009A92',
       'visaclrhvr': '#0b837d',

     },
     fontFamily: {
      PoppinsLight:['poppins-light', 'sans-serif'],
      PoppinsRegular:['poppins-regular', 'sans-serif'],
      PoppinsMedium:['poppins-medium', 'sans-serif'],
      PoppinsSemibold:['poppins-semibold', 'sans-serif'],
      PoppinsBold:['poppins-bold', 'sans-serif'],
      PoppinsExtraBold:['poppins-extrabold', 'sans-serif'],
     },
     backgroundImage: {
      'cta-bg': "url('./assets/images/visas/cta.webp')",
    }
   },
  
 },
  plugins: [require('@tailwindcss/typography')],
}