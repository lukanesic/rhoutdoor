import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase'
import { getDoc, doc } from '@firebase/firestore'
// PRIVREMENI SLICE
// OVO ZAMENJUJE LOCALSTORAGE ZA NATIVE UREDJAJE

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (email) => {
    try {
      const docRef = doc(db, 'users', email)
      const data = await getDoc(docRef)
      return data.data()
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  user: {},
  loading: false,
  error: false,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload
    },
  },
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.loading = true
    },
    [fetchUserData.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.loading = false

      localStorage.setItem('user', JSON.stringify(state.user))
    },
    [fetchUserData.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
