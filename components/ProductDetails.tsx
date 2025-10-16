import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useProduct } from '../hooks/useProduct';
import { FavoriteButton } from './FavoriteButton';
import { useTranslation } from 'react-i18next';
import { spacing } from '../constants/Spacing';
import { fontSizes, fontWeights } from '../constants/Typography';

interface ProductDetailsProps {
  id: number;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  const { data: product, isLoading, isError } = useProduct(id);
  const { t } = useTranslation();

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  if (isError || !product) {
    return <Text style={styles.centered}>{t('error_fetching_product_details')}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <FavoriteButton productId={product.id} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: spacing.l,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: spacing.l,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#f8f8f8',
    marginTop: -20,
  },
  title: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    marginVertical: spacing.m,
  },
  price: {
    fontSize: fontSizes.l,
    fontWeight: fontWeights.bold,
    marginBottom: spacing.m,
  },
  description: {
    fontSize: fontSizes.m,
  },
});
