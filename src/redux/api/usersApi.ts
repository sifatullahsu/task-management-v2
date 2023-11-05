import { tags } from '../tags'
import { baseApi } from './baseApi'

const usersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createUser: build.mutation({
      query: ({ data }) => ({
        url: `/auth/register`,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tags.users]
    }),
    getUsers: build.query({
      query: ({ query }) => ({
        url: `/users?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.users]
    }),
    getUser: build.query({
      query: ({ id, query }) => ({
        url: `/users/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.users]
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        data: data
      }),
      invalidatesTags: [tags.users]
    })
  })
})

export const { useCreateUserMutation, useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } = usersApi
