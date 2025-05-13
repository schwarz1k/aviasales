import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import { fetchSearchId, fetchTicketsBatch } from '../../services/ticketApi'

export const fetchAllTickets = createAsyncThunk('tickets/fetchAllTickets', async (_, { rejectWithValue, dispatch }) => {
  try {
    const { searchId } = await fetchSearchId()
    let stop = false
    let allTickets = []

    while (!stop) {
      try {
        const { tickets, stop: isStop } = await fetchTicketsBatch(searchId)
        allTickets = [...allTickets, ...tickets]
        stop = isStop

        dispatch(ticketSlice.actions.addTickets(tickets))
      } catch (error) {
        if (error.message.includes('404') || error.message.includes('500')) {
          throw error
        }
      }
    }

    return allTickets
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const initialState = {
  tickets: [],
  isComplete: false,
  initialLoading: false,
  loadingMore: false,
  error: null,
}

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets: (state, action) => {
      state.tickets.push(...action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTickets.pending, (state) => {
        state.initialLoading = true
        state.loadingMore = true
        state.error = null
        state.isComplete = false
      })
      .addCase(fetchAllTickets.fulfilled, (state) => {
        state.initialLoading = false
        state.loadingMore = false
        state.isComplete = true
      })
      .addCase(fetchAllTickets.rejected, (state, action) => {
        state.initialLoading = false
        state.loadingMore = false
        state.error = action.payload
        state.isComplete = true
      })
  },
})

export const selectFilteredTickets = createSelector(
  [(state) => state.tickets.tickets, (state) => state.filters.selectedStops],
  (tickets, selectedStops) => {
    if (selectedStops.length === 4) {
      return tickets
    }

    return tickets.filter((ticket) => {
      const stopsTo = ticket.segments[0].stops.length
      const stopsBack = ticket.segments[1].stops.length
      return selectedStops.includes(stopsTo) && selectedStops.includes(stopsBack)
    })
  }
)

export const selectSortedTickets = createSelector(
  [selectFilteredTickets, (state) => state.sortFilter.activeFilter],
  (tickets, activeFilter) => {
    if (activeFilter === 'cheap') {
      return [...tickets].sort((a, b) => a.price - b.price)
    }
    if (activeFilter === 'fast') {
      return [...tickets].sort((a, b) => {
        const durationA = a.segments[0].duration + a.segments[1].duration
        const durationB = b.segments[0].duration + b.segments[1].duration
        return durationA - durationB
      })
    }
    if (activeFilter === 'optimal') {
      return [...tickets].sort((a, b) => {
        const scoreA = a.price * 0.7 + (a.segments[0].duration + a.segments[1].duration) * 0.3
        const scoreB = b.price * 0.7 + (b.segments[0].duration + b.segments[1].duration) * 0.3
        return scoreA - scoreB
      })
    }
    return tickets
  }
)

export default ticketSlice.reducer
