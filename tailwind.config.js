/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
    'customFont': ['Open Sans'],
}
  },
  plugins: [
    require('flowbite/plugin')
  ],
}