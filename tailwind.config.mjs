/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        customTealWhite: '#009e91',
        customNavyTeal: '#006170',
        customLightTeal: '#73c491',
        customTextNavy: '#ade0db',
        customTextDarkTeal: '#004a54',
      },
      keyframes: {
        loading: {
          '0%': { color: '#e9e9e9' },
          '50%': { color: '#b89b84' },
          '100%': { color: '#e9e9e9' },
        },
        bounceColor: {
          '0%, 100%': { transform: 'scale(1)', backgroundColor: '#14b8a6' },
          '50%': { transform: 'scale(1.2)', backgroundColor: '#0d9488' },
        },
      },
      animation: {
        loading: 'loading 1.2s ease-in-out infinite',
        bounceColor: 'bounceColor 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
