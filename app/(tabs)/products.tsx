import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ProductList } from '@/components/ProductList';

export default function ProductListScreen() {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ title: t('product_list_title') }} />
      <ProductList />
    </>
  );
}
