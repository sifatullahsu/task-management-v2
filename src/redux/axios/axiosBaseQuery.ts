import { iMeta } from '@/types'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import axiosInstance from './axiosInstance'

type iType = ({ baseUrl }: { baseUrl: string }) => BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    meta?: iMeta
    contentType?: string
  },
  unknown,
  unknown
>

export const axiosBaseQuery: iType =
  ({ baseUrl }) =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          'Content-Type': contentType || 'application/json'
        }
        // withCredentials: true
      })
      return result
    } catch (error) {
      const err = error as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }
