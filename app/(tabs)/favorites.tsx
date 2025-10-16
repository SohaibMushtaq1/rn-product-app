import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useFavoritesStore } from '@/store/favorites';
import { useProducts } from '@/hooks/useProducts';
import { ProductListItem } from '@/components/ProductListItem';
import { spacing } from '@/constants/Spacing';

export default function FavoritesScreen() {
  const { t } = useTranslation();
  const { favorites } = useFavoritesStore();
  const { data: products, isLoading, isError } = useProducts();

  const favoriteProducts = products?.filter((p) => favorites.includes(p.id)) || [];

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (isError) {
    return <Text style={styles.centered}>{t('error_fetching_products')}</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: t('favorites_title', 'Favorites') }} />
      {favoriteProducts.length === 0 ? (
        <View style={styles.centered}>
          <Text>{t('no_favorites', 'You have no favorite products yet.')}</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteProducts}
          renderItem={({ item }) => <ProductListItem product={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.container}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: spacing.s,
    paddingBottom: 90, // Add padding to clear the floating tab bar
  },
});
