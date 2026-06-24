import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['var(--font-outfit)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            colors: {
                base: '#0a0a0f',
                surface: '#12121a',
                card: '#1a1a26',
                gold: '#c9a227',
                'gold-light': '#e8c547',
                teal: '#00d4ff',
                'teal-dark': '#0098bb',
                text: {
                    primary: '#f0f0f5',
                    secondary: '#a0a0b5',
                    muted: '#606075',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(201, 162, 39, 0.7)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}
export default config
