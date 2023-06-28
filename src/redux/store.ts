import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './slice/AuthSlice'
import productSlice from './slice/ProductSlice'
import categorySlice from './slice/CategorySlice'
import searchSlice from './slice/SearchSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice),
  product: productSlice,
  category: categorySlice,
  search: searchSlice
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
