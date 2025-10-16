import { useQuery } from '@tanstack/react-query';
import { useProductApi } from '../api/products';

export const useProduct = (id: number) => {
  const { getProductById } = useProductApi();

  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id),
    enabled: !!id, // Only run the query if the id is available
  });
};
