/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      animation: {
        loading: 'loading 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
