import { tags } from '../tags'
import { baseApi } from './baseApi'

export const listApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createList: build.mutation({
      query: ({ data }) => ({
        url: `/lists`,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tags.lists]
    }),
    getLists: build.query({
      query: ({ query }) => ({
        url: `/lists?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.lists]
    }),
    getListsWithTask: build.query({
      query: () => ({
        url: `/lists/with-task`,
        method: 'GET'
      }),
      providesTags: [tags.lists]
    }),
    getList: build.query({
      query: ({ id, query }) => ({
        url: `/lists/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.lists]
    }),
    updateList: build.mutation({
      query: ({ id, data }) => ({
        url: `/lists/${id}`,
        method: 'PATCH',
        data: data
      }),
      invalidatesTags: [tags.lists]
    }),
    deleteList: build.mutation({
      query: ({ id }) => ({
        url: `/lists/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [tags.lists]
    })
  })
})

export const {
  useCreateListMutation,
  useGetListsQuery,
  useGetListsWithTaskQuery,
  useGetListQuery,
  useUpdateListMutation,
  useDeleteListMutation
} = listApi
