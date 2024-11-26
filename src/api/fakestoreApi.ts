import axios from 'axios';
import {API_BASE} from '@env';

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
