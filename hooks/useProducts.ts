import { useQuery } from '@tanstack/react-query';
import { useProductApi } from '../api/products';

export const useProducts = () => {
  const { getProducts } = useProductApi();

  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};
