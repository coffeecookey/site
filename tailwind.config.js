/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#fcf9f8',
        'surface': '#f0edec',
        'maroon': '#800000',
        'maroon-dark': '#600000',
        'ink': '#1a1a1a',
        'ink-muted': '#4a4a4a',
        'ink-faint': '#9a9a9a',
        'border': '#e8e4e2',
      },
      fontFamily: {
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.0' }],
      },
      letterSpacing: {
        'widest': '0.2em',
      },
      width: {
        'sidebar': '256px',
      },
    },
  },
  plugins: [],
}
