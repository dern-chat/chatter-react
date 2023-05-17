import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:2323/api',
    timeout: 1000,
    headers: {
        Authorization: 'Bearer ' + document.cookie.split('=')[1]
    }
})
