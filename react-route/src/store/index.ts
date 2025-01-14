import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter.ts'
import { loggerMiddleware } from '../middleware/logger.ts'
import { errorHandleMiddleware } from '../middleware/errorHandler.ts'


const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, errorHandleMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store