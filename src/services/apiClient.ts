import { AuthCredential, AuthUser } from '@/entities/auth';
import axios, { AxiosRequestConfig } from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://d818-backend-a3bb3967e45d.herokuapp.com/api',
  // withCredentials: true
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use((config) => {
  const authUser: AuthUser = JSON.parse(localStorage.getItem('authUser')!);

  const token = authUser?.token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Attach token to headers
  }
  return config;
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  create = () => axiosInstance.post<T>(this.endpoint).then((res) => res.data);

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T[]>(this.endpoint, config).then((res) => res.data);

  get = (id: string) =>
    axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);

  post = (data: AuthCredential) =>
    axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
}

export default APIClient;
