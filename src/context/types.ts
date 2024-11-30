import { ReactNode } from 'react';

export interface CatalogContextValue {
  favoriteFilter: boolean;
  toggleCatalogFilter: (favoriteFilter: boolean) => void;
  favoriteIds: number[];
  toggleCatalogId: (id: number) => void;
}

export interface CatalogProviderProps {
  children: ReactNode;
  values: CatalogContextValue;
}
