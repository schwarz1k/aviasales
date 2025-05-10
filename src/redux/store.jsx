import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './slices/filterSlice.js'
import sortFilterReducer from './slices/sortFilterSlice.js'

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sortFilter: sortFilterReducer,
  },
})

export default store
