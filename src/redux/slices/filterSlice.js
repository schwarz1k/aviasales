import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedStops: [0, 1, 2, 3],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAll: (state) => {
      if (state.selectedStops.length === 4) {
        state.selectedStops = []
      } else {
        state.selectedStops = [0, 1, 2, 3]
      }
    },
    toggleStop: (state, action) => {
      const stop = action.payload
      if (state.selectedStops.includes(stop)) {
        state.selectedStops = state.selectedStops.filter((s) => s !== stop)
      } else {
        state.selectedStops.push(stop)
      }
    },
  },
})

export const { toggleAll, toggleStop } = filtersSlice.actions

export const selectSelectedStops = (state) => state.filters.selectedStops
export const selectIsAllSelected = (state) => state.filters.selectedStops.length === 4

export default filtersSlice.reducer
