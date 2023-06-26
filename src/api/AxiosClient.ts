import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});