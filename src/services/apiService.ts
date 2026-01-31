import axios from 'axios';
import { API_URL } from '../config/api';
import { Product, LoginRequest, LoginResponse } from '../types';

const api = axios.create({
  baseURL: API_URL,
});

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};
