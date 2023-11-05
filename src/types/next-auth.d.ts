import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string
      name: string
      email: string
      role: 'admin' | 'user'
      access_token: string
      refresh_token: string
    }
  }
}
