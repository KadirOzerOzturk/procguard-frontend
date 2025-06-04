import axios from 'axios';
import { toast } from 'sonner';

const api = axios.create(
  {
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000, 
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if ((status === 500 || status === 401) && data.message.includes('Authentication failed:')) {
        console.error('Authentication Error:', data.message);

        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('userRole');
       
        if (typeof window.navigateToLogin === 'function') {
          window.navigateToLogin();  
        }

        toast.error('Oturumunuzun süresi doldu. Lütfen tekrar giriş yapın.');
      }
    }

    return Promise.reject(error);
  }
);

export default api;