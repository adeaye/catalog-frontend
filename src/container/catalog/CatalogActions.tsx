import * as types from './CatalogTypes';
import { ProductRequestUriParams } from './CatalogInterfaces';
import * as api from './CatalogApi';

export function beginFetchProducts() {
  return {
    type: types.GET_PRODUCTS_BEGIN
  };
}

export function successFetchProducts(payload: any) {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload
  };
}

export function errorFetchProducts() {
  return {
    type: types.GET_PRODUCTS_ERROR
  };
}

export function fetchProducts(uriParams: ProductRequestUriParams = {}) {
  return (dispatch: any) => {
    dispatch(beginFetchProducts());

    return api.getProductsRequest(uriParams)
    .then((response) => {
      if (response.success) {
        dispatch(successFetchProducts(response.data));
      } else {
        dispatch(errorFetchProducts());
      }
      return response;
    });

  };
}

export function beginFetchProduct() {
  return {
    type: types.GET_PRODUCT_BEGIN
  };
}

export function successFetchProduct(payload: any) {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload
  };
}

export function errorFetchProduct() {
  return {
    type: types.GET_PRODUCT_ERROR
  };
}

export function fetchProduct(productId: number) {
  return (dispatch: any) => {
    dispatch(beginFetchProduct());

    return api.getProductRequest(productId)
    .then((response) => {
      if (response.success) {
        dispatch(successFetchProduct(response.data));
      } else {
        dispatch(errorFetchProduct());
      }
      return response;
    });

  };
}

export function clearProduct() {
  return {
    type: types.CLEAR_PRODUCT
  };
}