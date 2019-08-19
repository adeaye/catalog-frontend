import { CatalogReducerState, Product } from "./CatalogInterfaces";
import * as types from './CatalogTypes';
import { camelizeKeys } from 'humps';

const initialState: CatalogReducerState = {
  isLoading: false,
  byIds: [],
  entities: {},
  entity: null,
  page: null,
  itemsPerPage: null,
  totalPages: null,
};

const insertEntities = (currentEntities: any, payload: Array<Product>) => {
  const hashed = payload.reduce((acc, obj) => {
    acc[obj.id] = camelizeKeys(obj);
    return acc;
}, {}); //tslint:disable-line

  return {...currentEntities, ...hashed};
};

const insertIds = (currentIds: Array<number>, additionalData: Array<Product>) => {
  const additional = additionalData.map(catalogProduct => catalogProduct.id);

  return [...currentIds, ...additional];
};

const catalog = (state: CatalogReducerState = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PRODUCTS_BEGIN:
    case types.GET_PRODUCT_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        byIds: insertIds(state.byIds, action.payload.data),
        entities: insertEntities(state.entities, action.payload.data),
        page: action.payload.current_page,
        itemsPerPage: action.payload.per_page,
        totalPages: action.payload.last_page
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        entity: camelizeKeys(action.payload),
      };
    case types.GET_PRODUCTS_ERROR:
    case types.GET_PRODUCT_ERROR:
      return{
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default catalog;