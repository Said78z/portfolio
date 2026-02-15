import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#0078D4',
        'neon-green': '#39FF14',
        'neon-red': '#FF0000',
        'dark-bg': '#000000',
        'dark-card': '#121212',
        'cyber-gray': '#1a1a1a',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #0078D4 0%, #39FF14 100%)',
        'gradient-danger': 'linear-gradient(135deg, #FF0000 0%, #0078D4 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 120, 212, 0.8)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.8)',
        'neon-red': '0 0 20px rgba(255, 0, 0, 0.8)',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'pulse-neon': 'pulse-neon 2s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '-2px 0 #39FF14, 2px 0 #0078D4' },
          '20%': { textShadow: '2px 0 #39FF14, -2px 0 #0078D4' },
          '40%': { textShadow: '-2px 0 #0078D4, 2px 0 #39FF14' },
          '60%': { textShadow: '2px 0 #0078D4, -2px 0 #39FF14' },
          '80%': { textShadow: '-2px 0 #39FF14, 2px 0 #0078D4' },
          '100%': { textShadow: '2px 0 #39FF14, -2px 0 #0078D4' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config
