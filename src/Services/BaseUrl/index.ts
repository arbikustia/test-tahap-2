import { config } from '@/Constant/Config';
import Axios, { AxiosInstance } from 'axios';

export const baseUrl: AxiosInstance = Axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-type': 'application/json'
  }
});

export const catchHandler = (error: unknown) => {
  error;
};
