import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#E5B53B',
        'dark-primary': '#000000',
        'dark-secondary': '#111111',
        'light-primary': '#FFFFFF',
        'light-secondary': '#E2E2E2',
      },
      animation: {
        'into-view-desktop': 'into-view-desktop 1s linear',
        'into-view-mobile': 'into-view-mobile 1s linear',
        'fade-down': 'fade-down 0.5s',
        'fade-in': 'fade-in 0.75s ease-in-out',
      },
      keyframes: {
        'into-view-desktop': {
          from: { transform: 'translateX(+50%) translateY(+100%)' },
          to: { transform: 'translateX(0) translateY(0)' },
        },
        'into-view-mobile': {
          from: { transform: 'translateX(0) translateY(100%)' },
          to: { transform: 'translateX(0) translateY(0)' },
        },
        'fade-down': {
          from: { transform: 'translateY(-30px) scale(0.9)' },
          to: { transform: 'translateY(0) scale(1)' },
        },
        'fade-in': {
          from: { opacity: '0%' },
          to: { opacity: '100%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
