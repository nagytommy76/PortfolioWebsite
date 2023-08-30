import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'main-background': "url('/assets/background1.jpg')",
         },
         colors: {
            'main-bg': '#292929',
         },
         keyframes: {
            bounce: {
               '0%, 100%': { transform: 'translateY(0);' },
               '50%': { transform: 'translateY(-25%);' },
            },
         },
      },
   },
   plugins: [],
}
export default config
