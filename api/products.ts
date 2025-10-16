import { useAxios } from '../contexts/AxiosProvider';
import { Product } from '../types/product';

export const useProductApi = () => {
  const axios = useAxios();

  const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get('/products');
    return response.data;
  };

  const getProductById = async (id: number): Promise<Product> => {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  };

  return { getProducts, getProductById };
};
