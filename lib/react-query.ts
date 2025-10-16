import { QueryClient, QueryCache } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message || 'An unexpected error occurred',
      });
    },
  }),
});
