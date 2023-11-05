import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      },
      screens: {
        default: '1200px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      alegreya: ['var(--font-alegreya)']
    },
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cupcake: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['[data-theme=night]'],
          '--rounded-box': '4px',
          '--rounded-btn': '4px',
          '--rounded-badge': '1.9rem'
        }
      }
    ]
  }
}
export default config
