import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

const onRequest = (config: InternalAxiosRequestConfig) => {
  if (localStorage.getItem('accessToken')) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  return res.data;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

// export interface HttpClient extends AxiosInstance {
//   get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
//   delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
//   post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
//   put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
// }

export const api = setupInterceptorsTo(axiosInstance);
