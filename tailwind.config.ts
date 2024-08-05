import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'xs': 'var(--mantine-spacing-xs)',
        'sm': 'var(--mantine-spacing-sm)',
        'md': 'var(--mantine-spacing-md)',
        'lg': 'var(--mantine-spacing-lg)',
        'xl': 'var(--mantine-spacing-xl)',
      },
      colors: {
        'gray-0': 'var(--mantine-color-gray-0)',
        'gray-1': 'var(--mantine-color-gray-1)',
        'gray-2': 'var(--mantine-color-gray-2)',
        'gray-3': 'var(--mantine-color-gray-3)',
        'gray-4': 'var(--mantine-color-gray-4)',
        'gray-5': 'var(--mantine-color-gray-5)',
        'gray-6': 'var(--mantine-color-gray-6)',
        'gray-7': 'var(--mantine-color-gray-7)',
        'gray-8': 'var(--mantine-color-gray-8)',
        'gray-9': 'var(--mantine-color-gray-9)',
        'black': 'var(--mantine-color-black)',
        'base': 'var(--mantine-color-text)',
        'link': 'var(--mantine-color-anchor)'
      },
      borderRadius: {
        'xs': 'var(--mantine-radius-xs)',
        'sm': 'var(--mantine-radius-sm)',
        'md': 'var(--mantine-radius-md)',
        'lg': 'var(--mantine-radius-lg)',
        'xl': 'var(--mantine-radius-xl)',
      },
      fontFamily: {
        sans: ['var(--mantine-font-family)', 'sans-serif'],
        mono: ['var(--mantine-font-family-monospace)', 'monospace'],
        headings: ['var(--mantine-font-family-headings)', 'sans-serif'],
      },
      fontWeight: {
        normal: 'var(--mantine-font-weight)',
      },
      lineHeight: {
        normal: 'var(--mantine-line-height)',
      },
      fontSize: {
        'xs': 'var(--mantine-font-size-xs)',
        'sm': 'var(--mantine-font-size-sm)',
        'md': 'var(--mantine-font-size-md)',
        'lg': 'var(--mantine-font-size-lg)',
        'xl': 'var(--mantine-font-size-xl)',
      },
    },
  },
  plugins: [],
};
export default config;
