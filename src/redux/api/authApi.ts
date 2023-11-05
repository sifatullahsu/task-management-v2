import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    userRegistration: build.mutation({
      query: data => ({
        url: '/auth/register',
        method: 'POST',
        data: data
      })
    }),
    refreshToken: build.mutation({
      query: data => ({
        url: '/auth/refresh-token',
        method: 'POST',
        data: data
      })
    })
  })
})

export const { useUserRegistrationMutation, useRefreshTokenMutation } = authApi
