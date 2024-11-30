import { useEffect, useRef, useState } from 'react';
import { getProductById } from '@service/api';
import { ProductEntity } from '@service/types';
import { defaultMobileDetail } from '@hooks/constants';

const useMobileDetail = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(defaultMobileDetail);

  const isMounted = useRef(true);

  const tryAgain = () => {
    getMobileDetail();
  };

  const getMobileDetail = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await getProductById(id);
      const result: ProductEntity = await response.json();

      setDetail(result);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(true);
      setDetail(defaultMobileDetail);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      getMobileDetail();
    }
    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    detail,
    tryAgain,
  };
};

export default useMobileDetail;
