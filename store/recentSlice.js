import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recent: [],
}

export const recentSlice = createSlice({
  name: 'recentSlice',
  initialState,
  reducers: {
    addRecent: (state, { payload }) => {
      if (state.recent.includes(payload)) {
        return
      } else {
        state.recent.push(payload)
      }
    },
    removeAllRecent: (state) => {
      state.recent = []
    },
  },
})

export const { addRecent, removeAllRecent } = recentSlice.actions
export default recentSlice.reducer
