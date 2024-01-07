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
        'dark-seconday': '#2E2E2E',
        'light-primary': '#FFFFFF',
        'light-secondary': '#E2E2E2',
      },
    },
  },
  plugins: [],
};
export default config;
