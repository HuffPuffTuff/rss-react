/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        white: 'rgb(250, 242, 242)',
        overlay: 'orange',
        sky: '#e3edf7',
        shadow: 'rgba(0, 0, 0, 0.8)',
      },
      textColor: {
        white: 'rgb(250, 242, 242)',
        gray: '#9f0013',
        '#313b4e': '#313b4e',
      },
      height: {
        'image-s': '250px',
        450: '450px',
      },
      minHeight: {
        '54px': '54px',
      },
      width: {
        'image-s': '250px',
        800: '800px',
        '50%': '50%',
        '90%': '90%',
      },
      maxWidth: {
        240: '240px',
      },
      minWidth: {
        '54px': '54px',
      },
      zIndex: {
        minus: '-1',
      },
      gridTemplateColumns: {
        'main-cards': ' repeat(4, 250px)',
        'form-cards': 'repeat(2, 250px)',
        'form-page': '40% 1fr',
        'card-modal': '60% 1fr',
      },
      gridTemplateRows: {
        'form-page': '625px 1fr',
      },
    },
  },
  plugins: [],
};
