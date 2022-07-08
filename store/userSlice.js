import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { doc, getDoc } from '@firebase/firestore'

import { auth, db } from '../firebase'

export const fetchUser = createAsyncThunk(
  'userSlice/fetchUser',
  async ({ email, token }) => {
    try {
      const userRef = doc(db, 'users', email)
      const userSnap = await getDoc(userRef)

      return { token: token, ...userSnap.data() }
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
    setUserFromStorage: (state, { payload }) => {
      state.user = payload
    },
    removeUserFromStorage: (state) => {
      state.user = {}
      AsyncStorage.removeItem('token')
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      AsyncStorage.setItem('token', JSON.stringify(payload))
      state.user = payload
    },
    [fetchUser.rejected]: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { setUserFromStorage, removeUserFromStorage } = userSlice.actions
export default userSlice.reducer
