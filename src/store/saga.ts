import { all, fork, takeEvery } from 'redux-saga/effects';

import productsSaga from './products/products.saga';

function* watchAndLog(action: any) {
  console.log(action);
  yield;
}

export default function* rootSaga() {
  try {
    yield all([takeEvery('*', watchAndLog)]);
    yield fork(productsSaga);
  } catch (e) {
    console.log('this is an error : ', e);
  }
}
