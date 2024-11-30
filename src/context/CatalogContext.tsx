import { createContext, useCallback, useContext, useState } from 'react';
import { CatalogContextValue, CatalogProviderProps } from '@context/types';

export const defaultCatalogContextValue: CatalogContextValue = {
  favoriteFilter: false,
  toggleCatalogFilter: () => console.warn('toggleCatalogFilter init'),
  favoriteIds: [],
  toggleCatalogId: () => console.warn('toggleCatalogId init'),
};

export const CatalogContext = createContext(defaultCatalogContextValue);

export const CatalogProvider = ({ children, values }: CatalogProviderProps) => {
  const [favoriteFilter, setCatalogFilter] = useState(values.favoriteFilter);
  const [favoriteIds, setCatalogIds] = useState(values.favoriteIds);

  const toggleCatalogFilter = useCallback(
    (value: boolean) => setCatalogFilter(value),
    []
  );
  const toggleCatalogId = useCallback(
    (id: number) => {
      const index = favoriteIds.indexOf(id);
      if (index > -1) {
        const ids = [...favoriteIds];
        ids.splice(index, 1);
        setCatalogIds(ids);
        return;
      }
      setCatalogIds([...favoriteIds, id]);
    },
    [favoriteIds]
  );

  return (
    <CatalogContext.Provider
      value={{
        favoriteFilter,
        toggleCatalogFilter,
        favoriteIds,
        toggleCatalogId,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalogs = () => useContext(CatalogContext);
