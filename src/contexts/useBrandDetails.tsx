import { createContext, useContext } from 'react';

interface BrandDetails {
  name: string;
  description: string;
  logo: string;
  website: string;
}

const Brand = createContext<BrandDetails | undefined>(undefined);

export const BookingProvider = ({ children }) => {
  return <Brand.Provider value={value}>{children}</Brand.Provider>;
};

export default function useBrandDetails() {
  const context = useContext(Brand);
  if (!context) {
    throw new Error('useBrandDetails must be used within a BrandProvider');
  }
}
