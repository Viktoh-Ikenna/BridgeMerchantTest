import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '../api/fakestoreApi';

export const useProducts = (query: string) =>
     useQuery({
          queryKey: ['products', query],
          queryFn: () => fetchProducts(query),
     });
