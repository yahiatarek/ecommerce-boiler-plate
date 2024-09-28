import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import type { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

import { Category, Product, ProductsStoreState } from '../models/products.model';
import { stat } from 'fs';

const INIT_STATE: ProductsStoreState = {
  products: [],
  categories: [],
  cart: [],
};

const fetchProductsCaseReducer: CaseReducer<
  ProductsStoreState
> = () => { };

const fetchProductsSucceededCaseReducer: CaseReducer<
  ProductsStoreState,
  PayloadAction<any>
> = (state, action) => {
  state.products = action.payload.data
};

const fetchCategoriesCaseReducer: CaseReducer<
  ProductsStoreState
> = () => { };

const fetchCategoriesSucceededCaseReducer: CaseReducer<
  ProductsStoreState,
  PayloadAction<any>
> = (state, action) => {
  state.categories = action.payload.data
};

const addToCartCaseReducer: CaseReducer<ProductsStoreState, PayloadAction<any>> = (state, action) => {
  const productToAdd = state.cart.find(product => product.id === action.payload.id);

  if (productToAdd) {
    productToAdd.productRecurrence += 1;
  } else {
    state.cart.push({ ...action.payload, productRecurrence: 1 });
  }
};

const removeFromCartCaseReducer: CaseReducer<ProductsStoreState, PayloadAction<any>> = (state, action) => {
  const productToRemove = state.cart.find(product => product.id === action.payload.id);

  if (productToRemove) {
    if (productToRemove.productRecurrence > 1) {
      productToRemove.productRecurrence -= 1;
    } else {
      state.cart = state.cart.filter(product => product.id !== action.payload.id);
    }
  }
};

const productsSlice = createSlice({
  name: 'products',
  initialState: INIT_STATE,
  reducers: {
    fetchProductsAction: fetchProductsCaseReducer,
    fetchProductsSucceededAction: fetchProductsSucceededCaseReducer,
    fetchCategoriesAction: fetchCategoriesCaseReducer,
    fetchCategoriesSucceededAction: fetchCategoriesSucceededCaseReducer,
    addToCartAction: addToCartCaseReducer,
    removeFromCartAction: removeFromCartCaseReducer,
  },
});

export const {
  fetchProductsAction,
  fetchCategoriesAction,
  addToCartAction,
  removeFromCartAction,
  fetchCategoriesSucceededAction,
  fetchProductsSucceededAction
} = productsSlice.actions;

const productsPersistConfig: PersistConfig<ProductsStoreState> = {
  key: 'products',
  storage,
  whitelist: ['cart'],

};

export default persistReducer(productsPersistConfig, productsSlice.reducer);
