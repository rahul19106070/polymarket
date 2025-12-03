import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        okx: {
          primary: '#00FF00',      // OKX neon green
          background: '#000000',   // OKX black
          text: '#CCCCCC',         // OKX light gray text
          white: '#FFFFFF',        // OKX white
          gray: {
            50: '#FFFFFF',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#CCCCCC',
            400: '#999999',
            500: '#666666',
            600: '#333333',
            700: '#1A1A1A',
            800: '#0D0D0D',
            900: '#000000',
          },
          border: '#1A1A1A',       // OKX border gray
          hover: '#1A1A1A',        // OKX hover state
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config

