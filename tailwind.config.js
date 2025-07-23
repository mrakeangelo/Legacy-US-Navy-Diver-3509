/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a192f',
        'oxygen-yellow': '#facc15',
        'dive-black': '#111827',
        'coral-blue': '#1e3a8a',
        'wet-gray': '#d1d5db',
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'bubble-float': 'bubbleFloat 3s ease-in-out infinite',
        'dive-descent': 'diveDescentAnimation 2s ease-out',
        'pressure-gauge': 'pressureGauge 4s ease-in-out infinite',
      },
      keyframes: {
        bubbleFloat: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '1' },
        },
        diveDescentAnimation: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        pressureGauge: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}