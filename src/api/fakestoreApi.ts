import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const fetchCategories = async () => {
     const {data} = await axios.get(`${API_BASE}/products/categories`);
     return data;
};

export const fetchProducts = async (query = '') => {
     const {data} = await axios.get(`${API_BASE}/products`, {
          params: {q: query},
     });
     return data;
};
