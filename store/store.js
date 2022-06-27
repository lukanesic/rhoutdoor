import { configureStore } from '@reduxjs/toolkit'
import recentSlice from './recentSlice'

export default configureStore({
  reducer: {
    recentViewed: recentSlice,
  },
})
