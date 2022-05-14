module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'required': '#ff0000',
        'error': '#ff0000',
      },
      keyframes: {
        appear: {
          '0%': {
            display: 'block',
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        disappear: {
          '0%': {
            display: 'block',
            opacity: 1,
          },
          '100%': {
            display: 'none',
            opacity: 0,
          },
        },
        active: {
          '100%': {
            backgroundColor: 'rgb(107 114 128)',
          },
        },
        inactive: {
          '0%': {
            backgroundColor: 'rgb(107 114 128)',
          },
          '100%': {
            backgroundColor: '#000000',
          },
        },
      },
      animation: {
        appear: 'appear 0.5s linear',
        disappear: 'disappear 0.5s linear',
        active: 'active 0.5s ease-out',
        inactive: 'inactive 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
