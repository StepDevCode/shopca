import axios from 'axios'

const API_URL = 'https://381c835a4f5e8d34.mokky.dev'

export const apiInstance = axios.create({
  baseURL: API_URL,
})
