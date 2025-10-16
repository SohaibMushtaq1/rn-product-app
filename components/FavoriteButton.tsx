import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFavoritesStore } from '@/store/favorites';
import { spacing } from '@/constants/Spacing';

interface FavoriteButtonProps {
  productId: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ productId }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const isFav = isFavorite(productId);

  const handlePress = () => {
    if (isFav) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <FontAwesome
        name={isFav ? 'heart' : 'heart-o'}
        size={24}
        color={isFav ? 'red' : 'gray'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: spacing.m,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    top: spacing.m,
    right: spacing.m,
  },
});
