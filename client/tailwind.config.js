/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'neon-pink':
          'linear-gradient(45deg, #ff00ff, #ff69b4, #ff1493, #ff6ec7)',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
