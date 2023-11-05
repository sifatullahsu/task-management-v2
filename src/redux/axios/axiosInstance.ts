import axios from 'axios'
import { getSession } from 'next-auth/react'

const axiosInstance = axios.create()

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.defaults.headers['Accept'] = 'application/json'
axiosInstance.defaults.timeout = 60000

axiosInstance.interceptors.request.use(async function (config) {
  const session = await getSession()

  const accessToken = session?.user.access_token
  if (accessToken) config.headers.Authorization = accessToken

  return config
})

axiosInstance.interceptors.response.use(
  // @ts-ignore
  response => ({ data: response.data }),
  error => ({ data: error.response.data })
)

export default axiosInstance
