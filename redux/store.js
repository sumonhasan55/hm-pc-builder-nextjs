import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/builder/builderSlice'
import { apiSlice } from './api/api'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})