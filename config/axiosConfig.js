import axios from 'axios';
import Cookie from 'js-cookie';

// const baseUrl = 'https://api.gigremotely.com/';
const baseUrl = 'http://localhost:8000/';

axios.interceptors.request.use(
  (config) => {
    if (config.baseURL === baseUrl && !config.headers.Authorization) {
      const token = Cookie.get('__gigtoken');
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
axios.defaults.baseURL = baseUrl;
axios.interceptors.response.use((response) => {
  if (response.status !== 200 && response.status !== 201) return Promise.reject(response);
  return response.data;
}, (error) => Promise.reject(error.response));
