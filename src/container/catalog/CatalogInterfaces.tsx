export interface Product {
  id: number;
  name: string;
  detail: ProductDetail;
  category: ProductCategory;
  photos: Array<ProductPhoto>;
}

interface ProductDetail {
  description: string;
  color: string;
  brand: string;
  stock: number;
  normalPrice: number;
  discountPrice: number;
  size: ProductSize;
}

interface ProductCategory {
  id: number;
  name: string;
}

export enum ProductSize {
  S = 'S',
  M = 'M',
  L = 'L'
}

export interface ProductPhoto {
  id: number;
  url: string;
}

export interface ProductRequestUriParams {
  page?: number;
  limit?: number;
}

export interface CatalogReducerState {
  isLoading: boolean;
  byIds: Array<number>;
  entities: any;
  entity: Product;
  page: number;
  totalPages: number;
  itemsPerPage: number;
}