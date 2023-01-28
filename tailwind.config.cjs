/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#050505',
        'black-2': '#1F1F1F',
        'black-3': '#2D2D2D',
        'black-4': '#3A3A3A',
        gray: '#757575',
        'gray-2': '#E9E9E9',
        'gray-3': '#F4F4F4',
        purple: 'rgb(164, 69, 237)',
        red: 'rgb(255, 82, 82)'
      },
      boxShadow: {
        dropdown: '0px 5px 30px rgba(0, 0, 0, 0.1)',
        'dropdown-dark': '0px 5px 30px #A445ED'
      },
      backgroundImage: {
        search: 'url("./assets/images/icon-search.svg")'
      }
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '817px'
    },
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      mono: ['Inconsolata', 'monospace']
    },
    fontSize: {
      'heading-l': '4rem',
      'heading-m': '1.5rem',
      'heading-s': '1.25rem',
      'body-m': '1.125rem',
      'body-s': '0.875rem',
      'mobile-heading-l': '2rem',
      default: '1rem',
      20: '1.25rem'
    },
    lineHeight: {
      'heading-l': '4.8125rem',
      'heading-m': '1.8125rem',
      'heading-s': '1.5rem',
      'body-m': '1.5rem',
      'body-s': '1.0625rem'
    },
    backgroundPosition: {
      'right-4': 'right 24px center'
    }
  },
  plugins: []
}
