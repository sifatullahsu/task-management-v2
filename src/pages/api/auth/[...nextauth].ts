/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const SERVER_URL = process.env.SERVER_URL

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true }
      },
      async authorize(credentials) {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        }

        const res = await fetch(`${SERVER_URL}/api/v1/auth/login`, options)
        const user = await res.json()

        return user ? user.data : null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ token, session }) {
      session.user = token as any
      return session
    }
  }
}

export default NextAuth(options)
