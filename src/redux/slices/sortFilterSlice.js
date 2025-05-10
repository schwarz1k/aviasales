import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: 'cheap',
}

const sortFilterSlice = createSlice({
  name: 'sortFilter',
  initialState,
  reducers: {
    setCheap: (state) => {
      state.activeFilter = 'cheap'
    },
    setFast: (state) => {
      state.activeFilter = 'fast'
    },
    setOptimal: (state) => {
      state.activeFilter = 'optimal'
    },
  },
})

export const { setCheap, setFast, setOptimal } = sortFilterSlice.actions

export const selectActiveFilter = (state) => state.sortFilter.activeFilter

export default sortFilterSlice.reducer
