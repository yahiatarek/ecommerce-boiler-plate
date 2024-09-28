import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

export const categoriesApi = '/categories';
export const productsApi = '/products';

export const axiosRequest: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
    responseType: 'json',
});

