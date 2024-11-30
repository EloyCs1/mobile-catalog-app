const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

const getEndpointUrl = (endpoint: string) => `${VITE_BASE_URL}${endpoint}`;

const getProductsUrl = (search: string, limit: number, offset: number) =>
  getEndpointUrl(
    `/products?search=${search}${limit ? `&limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
  );

const getProductByIdUrl = (id: string) => getEndpointUrl(`/products/${id}?`);

export const getProducts = async (
  search: string,
  limit: number,
  offset: number
) => {
  return await fetch(getProductsUrl(search, limit, offset), {
    cache: 'force-cache',
    headers: {
      'x-api-key': VITE_API_KEY,
    },
  });
};

export const getProductById = async (id: string) => {
  return await fetch(getProductByIdUrl(id), {
    cache: 'force-cache',
    headers: {
      'x-api-key': VITE_API_KEY,
    },
  });
};
