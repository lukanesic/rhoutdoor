import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../firebase'

export const fetchProductsByCategory = createAsyncThunk(
  'productSlice/fetchProductsByCategory',
  async (subcategory) => {
    let data = []
    try {
      const q = query(
        collection(db, 'products'),
        // where('category', '==', category)
        where('subcategory', '==', subcategory)
      )
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        return data.push({ ...doc.data(), id: doc.id })
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  products: [],
  product: {},
  loading: false,
  error: false,
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.products = []
    },
  },
  extraReducers: {
    [fetchProductsByCategory.pending]: (state) => {
      state.loading = true
    },
    [fetchProductsByCategory.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.products = payload
    },
    [fetchProductsByCategory.rejected]: (state, { payload }) => {
      state.loading = null
      state.error = true
      console.log(payload)
    },
  },
})

export const { resetProducts } = productSlice.actions
export default productSlice.reducer
