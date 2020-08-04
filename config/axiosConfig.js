import axios from 'axios';
import Cookie from 'js-cookie';

axios.interceptors.request.use(
  (config) => {
    console.log(process.env.API_URL)
    if (config.baseURL === process.env.API_URL && !config.headers.Authorization) {
      const token = Cookie.get('__gigtoken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);
axios.defaults.baseURL = process.env.API_URL;
axios.interceptors.response.use((response) => {
  if (response.status !== 200 && response.status !== 201) return Promise.reject(response);
  return response.data;
}, (error) => Promise.reject(error.response));
