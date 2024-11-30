import { ProductListEntity, ProductEntity } from '@service/types';

export const defaultMobileList: ProductListEntity[] = [];

export const defaultMobileDetail: ProductEntity = {
  id: '',
  brand: '',
  name: '',
  description: '',
  basePrice: NaN,
  rating: NaN,
  specs: {
    screen: '',
    resolution: '',
    processor: '',
    mainCamera: '',
    selfieCamera: '',
    battery: '',
    os: '',
    screenRefreshRate: '',
  },
  colorOptions: [],
  storageOptions: [],
  similarProducts: [],
};
