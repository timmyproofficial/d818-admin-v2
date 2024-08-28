import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://d818-backend-a3bb3967e45d.herokuapp.com/api',
});

// Add a request interceptor to include the token in headers
// axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const token = localStorage.getItem('accesstoken')
//   if(token)
// })

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
}

export default APIClient;
