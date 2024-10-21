import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);
