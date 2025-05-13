import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './slices/filterSlice.js'
import sortFilterReducer from './slices/sortFilterSlice.js'
import ticketReducer from './slices/ticketSlice.js'
import displayReducer from './slices/displaySlice.js'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sortFilter: sortFilterReducer,
    tickets: ticketReducer,
    display: displayReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
