import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import { ProductListItem } from './ProductListItem';
import { useTranslation } from 'react-i18next';
import { spacing } from '../constants/Spacing';

export const ProductList: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();
  const { t } = useTranslation();

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (isError) {
    return <Text style={styles.centered}>{t('error_fetching_products')}</Text>;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: spacing.s,
    paddingBottom: 90, // Add padding to clear the floating tab bar
  },
});
