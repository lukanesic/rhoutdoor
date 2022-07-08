import { configureStore } from '@reduxjs/toolkit'
import recentSlice from './recentSlice'
import userSlice from './userSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

export default configureStore({
  reducer: {
    recentViewed: recentSlice,
    user: userSlice,
    products: productSlice,
    cart: cartSlice,
  },
})
