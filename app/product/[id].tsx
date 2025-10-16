import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ProductDetails } from '@/components/ProductDetails';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { t } = useTranslation();

  const productId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id || '', 10);

  return (
    <>
      <Stack.Screen
        options={{
          title: t('product_details_title'),
          headerBackTitle: ' ',
        }}
      />
      {productId ? <ProductDetails id={productId} /> : null}
    </>
  );
}
