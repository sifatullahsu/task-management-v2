import { baseApi } from './api/baseApi'

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer
}
