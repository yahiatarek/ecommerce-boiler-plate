import { all, call, put, select, takeLeading } from 'typed-redux-saga';

import * as productsActions from './products.slice';
import { action } from 'typesafe-actions';
import axios from 'axios';
import { axiosRequest, categoriesApi, productsApi } from '../../../api/apis';
import { Category, Product } from '../models/products.model';

function* fetchProductsSaga() {
  try {
    const res = yield* call(axiosRequest.get, productsApi);

    yield put(productsActions.fetchProductsSucceededAction(res as Product[]));
  } catch (e) {
    console.log(e, 'error loading categories')
  }
}

function* fetchCategoriesSaga() {
  try {
    const res = yield* call(axiosRequest.get, categoriesApi);

    yield put(productsActions.fetchCategoriesSucceededAction(res as Category[]));
  } catch (e) {
    console.log(e, 'error loading categories')
  }
}


export default function* productsSaga() {
  yield all([
    takeLeading(productsActions.fetchCategoriesAction, fetchCategoriesSaga),
    takeLeading(productsActions.fetchProductsAction, fetchProductsSaga),
  ]);
}
