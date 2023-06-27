import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})
