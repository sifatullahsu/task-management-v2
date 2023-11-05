import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../axios/axiosBaseQuery'
import { tagsArray } from '../tags'

// const server = `https://mentor-plus-server.vercel.app/api/v1`
const server = `http://localhost:5000/api/v1`

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: server }),
  endpoints: () => ({}),
  tagTypes: tagsArray
})
