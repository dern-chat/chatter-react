import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:2323/api',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ' + (() => {
      return document.cookie.split('; ').find(row => row.startsWith('token'))?.split('=')[1] || ''
    })()
  }
})
