import { configureStore } from '@reduxjs/toolkit'
import recentSlice from './recentSlice'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    recentViewed: recentSlice,
    user: userSlice,
  },
})
