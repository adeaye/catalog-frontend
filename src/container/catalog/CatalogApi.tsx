import { BaseApiUrl } from 'src/utils/config';
import { HTTPResponseHandler, HTTPSuccessResponseBuilder } from 'src/utils/networkHandler';
import { ProductRequestUriParams } from './CatalogInterfaces';
import { decamelizeKeys } from 'humps';
import * as qs from 'query-string';

export function getProductsRequest(uriParams?: ProductRequestUriParams) {
  const underscoredParams = decamelizeKeys(uriParams);
  
  return fetch(`${BaseApiUrl}/products?${qs.stringify(underscoredParams)}`, {
    method: "GET",
  })
    .then(response => {
      return HTTPResponseHandler(response);
    })
    .then(response => {
      return HTTPSuccessResponseBuilder(response);
    })
    .catch(error => {
      return {
        success: false,
        data: error.message
      };
    });
}

export function getProductRequest(productId: number) {
  
  return fetch(`${BaseApiUrl}/products/${productId}`, {
    method: "GET",
  })
    .then(response => {
      return HTTPResponseHandler(response);
    })
    .then(response => {
      return HTTPSuccessResponseBuilder(response);
    })
    .catch(error => {
      return {
        success: false,
        data: error.message
      };
    });
}