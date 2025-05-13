import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ticketsToShow: 5,
}

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    showMoreTickets: (state) => {
      state.ticketsToShow += 5
    },
  },
})

export const { showMoreTickets } = displaySlice.actions
export default displaySlice.reducer
