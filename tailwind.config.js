module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'required': '#ff0000',
        'error': '#ff0000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
