import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Product } from '../types/product';
import { spacing } from '../constants/Spacing';
import { fontSizes, fontWeights } from '../constants/Typography';

interface ProductListItemProps {
  product: Product;
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.m,
    margin: spacing.s,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontSizes.m,
    fontWeight: fontWeights.normal,
    marginVertical: spacing.s,
    textAlign: 'left',
    alignSelf: 'flex-start',
    height: 40, // Ensure consistent height for titles
  },
  price: {
    fontSize: fontSizes.l,
    fontWeight: fontWeights.bold,
    alignSelf: 'flex-start',
  },
});
