import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://d818-backend-a3bb3967e45d.herokuapp.com/api',
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T[]>(this.endpoint, config).then((res) => res.data);

  get = (id: string) =>
    axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
}

export default APIClient;
