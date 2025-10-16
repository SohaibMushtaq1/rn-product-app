import React, { createContext, useContext } from 'react';
import { AxiosInstance } from 'axios';
import axiosInstance from '../lib/axios';

const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AxiosContext.Provider value={axiosInstance}>{children}</AxiosContext.Provider>;
};

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error('useAxios must be used within an AxiosProvider');
  }
  return context;
};
