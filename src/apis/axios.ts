import axios from 'axios';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_API_DOMAIN || '/',
  baseURL: 'https://ts-freyja-api.onrender.com/',
});

export default instance;