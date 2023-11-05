import { tags } from '../tags'
import { baseApi } from './baseApi'

export const taskApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createTask: build.mutation({
      query: ({ data }) => ({
        url: `/tasks`,
        method: 'POST',
        data: data
      }),
      invalidatesTags: [tags.tasks]
    }),
    getTasks: build.query({
      query: ({ query }) => ({
        url: `/tasks?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.tasks]
    }),
    getTask: build.query({
      query: ({ id, query }) => ({
        url: `/tasks/${id}?${query}`,
        method: 'GET'
      }),
      providesTags: [tags.tasks]
    }),
    updateTask: build.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        data: data
      }),
      invalidatesTags: [tags.tasks]
    }),
    deleteTask: build.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [tags.tasks]
    })
  })
})

export const {
  useCreateTaskMutation,
  useGetTasksQuery,
  useGetTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskApi
