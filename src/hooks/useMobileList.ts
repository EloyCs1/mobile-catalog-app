import { useEffect, useRef, useState } from 'react';
import { GET_PRODUCTS_LIMIT } from '@service/constants';
import { getProducts } from '@service/api';
import { ProductListEntity } from '@service/types';
import { defaultMobileList } from '@hooks/constants';

const useMobileList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [mobileList, setMobileList] = useState(defaultMobileList);
  const isMounted = useRef(true);
  const isSearchMounted = useRef(true);

  const tryAgain = () => getMobileList(searchText);

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const getMobileList = async (search: string) => {
    try {
      setLoading(true);
      setError(false);
      setMobileList([]);
      const response = await getProducts(search, GET_PRODUCTS_LIMIT, 0);
      const results: ProductListEntity[] = await response.json();

      setMobileList(results);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(true);
      setMobileList(defaultMobileList);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      getMobileList('');
      isMounted.current = false;
      return;
    }

    if (isSearchMounted.current) {
      isSearchMounted.current = false;
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      getMobileList(searchText);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return {
    loading,
    error,
    mobileList,
    searchText,
    onChangeSearchText,
    tryAgain,
  };
};

export default useMobileList;
