import { Alegreya, Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin']
})

export const alegreya = Alegreya({
  weight: ['400', '500', '600', '700'],
  variable: '--font-alegreya',
  subsets: ['latin']
})
