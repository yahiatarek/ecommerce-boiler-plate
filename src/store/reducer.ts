import { combineReducers } from '@reduxjs/toolkit';

import type { RootActions } from '@/store/models';
import productsReducer from '@/store/products/products.slice';

export interface State {
  products: ReturnType<typeof productsReducer>;
}

export const reducers = {
  products: productsReducer,
};

const rootReducer = combineReducers<State, RootActions>(reducers);

export default rootReducer;
