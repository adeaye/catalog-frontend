import { applyMiddleware, combineReducers, compose, createStore as _createStore } from 'redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import filter from 'redux-localstorage-filter';
import * as adapter from 'redux-localstorage/lib/adapters/localStorage';
import thunkMiddleware from 'redux-thunk';

import catalog from './container/catalog/CatalogReducer';

const rootReducer = combineReducers({
  catalog
});

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
  filter([])
)(adapter(window.localStorage));

const createPersistentStore = compose(
  applyMiddleware(thunkMiddleware),
  persistState(storage, 'sorabel-storage')
)(_createStore);

export default function createStore() {
  return createPersistentStore(reducer);
}
