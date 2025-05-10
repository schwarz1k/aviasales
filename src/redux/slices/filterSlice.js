import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  nonStop: true,
  oneStop: true,
  twoStop: true,
  threeStop: true,
}

const updateAllState = (state) => {
  const allSelected = state.nonStop && state.oneStop && state.twoStop && state.threeStop
  state.all = allSelected
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAll: (state) => {
      const newValue = !state.all
      state.all = newValue
      state.nonStop = newValue
      state.oneStop = newValue
      state.twoStop = newValue
      state.threeStop = newValue
    },
    setNonStop: (state) => {
      state.nonStop = !state.nonStop
      updateAllState(state)
    },
    setOneStop: (state) => {
      state.oneStop = !state.oneStop
      updateAllState(state)
    },
    setTwoStop: (state) => {
      state.twoStop = !state.twoStop
      updateAllState(state)
    },
    setThreeStop: (state) => {
      state.threeStop = !state.threeStop
      updateAllState(state)
    },
  },
})

export const { setNonStop, setAll, setOneStop, setTwoStop, setThreeStop } = filtersSlice.actions

export const selectAll = (state) => state.filters.all
export const selectNonStop = (state) => state.filters.nonStop
export const selectOneStop = (state) => state.filters.oneStop
export const selectTwoStop = (state) => state.filters.twoStop
export const selectThreeStop = (state) => state.filters.threeStop

export default filtersSlice.reducer
