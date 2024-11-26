import {useQuery} from '@tanstack/react-query';
import {fetchCategories} from '../api/fakestoreApi';

export const useCategories = () =>
     useQuery({
          queryKey: ['categories'],
          queryFn: fetchCategories,
     });
