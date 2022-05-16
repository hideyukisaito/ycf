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
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        disappear: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        'expand-vertically': {
          '0%': {
            height: 0,
          },
          '100%': {
            height: '4rem',
          },
        },
        'collapse-vertically': {
          '0%': {
            height: '4rem',
          },
          '100%': {
            height: 0,
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
        appear: 'appear 300ms linear forwards',
        disappear: 'disappear 0.3s linear forwards',
        'expand-vertically': 'expand-vertically 0.5s ease-out',
        'collapse-vertically': 'collapse-vertically 0.5s ease-out',
        active: 'active 0.5s ease-out',
        inactive: 'inactive 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
