/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "land-img":"url('./images/Home image.jpg')",
        "ser-1":"url('./images/chef.jpg')",
        "ser-2":"url('./images/gro.jpg')",
        "ser-3":"url('./images/blog.png')",
        "signup":"url('./images/Signup.jpg')",
        "login":"url('./images/Login.jpg')",
        "pageNfound":"url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
        "getStart":"url('./images/getStart.png')",
        "cooking":"url('./images/cooking.jpg')",
        "grocery-banner":"url('./images/grocery-banner2_enhanced.png')",
        "uiai":"url('./images/UiAI.png')",
        "bgimg":"url('./images/chef.png')",
        "blackOverlay":"linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,100) 70%)",
        "chef1":"url('./images/showchef1.png')",
        "chef2":"url('./images/showchef2.png')",
        "chefServise1":"url('./images/chefServise1.png')",
        "chefServise2":"url('./images/chefServise2.png')",
        "chefServise3":"url('./images/chefServise3.png')",
      },
      backgroundColor:{
        "blurbg":"linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))"
      }
    },
  },
  plugins: [],
}