import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies/:companyname/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';

export const getProducts = async (filters) => {
  const response = await axios.get(`${API_BASE_URL}/products`, { params: filters });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
