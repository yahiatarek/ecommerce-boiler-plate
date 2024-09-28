import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import type { PersistConfig } from 'redux-persist/es/types';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import type { StoreState } from '@/store/models/index';
import rootSaga from '@/store/saga';

import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig<StoreState> = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // TODO: To be removed after resolving all the non-serializable value issues
    }).concat(sagaMiddleware),
  devTools: true, // Enable Redux DevTools extension
});


sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
