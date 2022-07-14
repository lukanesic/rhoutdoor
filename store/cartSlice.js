import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
  savedForLater: [],
  userList: [],
  loading: false,
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemId = state.cart.findIndex((item) => item.id === payload.id)

      if (itemId >= 0) {
        state.cart[itemId].qty += 1
      } else {
        const newItem = { ...payload, qty: 1 }
        state.cart.push(newItem)
      }

      AsyncStorage.setItem('cartItem', JSON.stringify(state.cart))
    },
    addToCartFromStorageRequest: (state) => {
      state.loading = true
    },
    addToCartFromStorageSuccess: (state, { payload }) => {
      state.cart = payload
      state.loading = false
    },
    removeFromCart: (state, { payload }) => {
      const newCart = state.cart.filter((item) => item.id !== payload.id)
      state.cart = newCart
      AsyncStorage.setItem('cartItem', JSON.stringify(state.cart))
    },
    addToSavedForLater: (state, { payload }) => {
      state.savedForLater.push(payload)
      AsyncStorage.setItem('saved', JSON.stringify(state.savedForLater))

      state.cart = state.cart.filter((item) => item.id !== payload.id)
      AsyncStorage.setItem('cartItem', JSON.stringify(state.cart))
    },
    addToSavedForLaterFromStorage: (state, { payload }) => {
      state.savedForLater = payload
    },
    addToUserList: (state, { payload }) => {
      console.log(payload)
    },
    addToBagFromWishlist: (state, { payload }) => {
      state.cart.push(payload)
      AsyncStorage.setItem('cartItem', JSON.stringify(state.cart))

      state.savedForLater = state.savedForLater.filter(
        (item) => item.id !== payload.id
      )
      AsyncStorage.setItem('saved', JSON.stringify(state.savedForLater))
    },

    decreaseQty: (state, { payload }) => {
      const itemId = state.cart.findIndex((item) => item.id === payload.id)

      if (state.cart[itemId].qty > 1) {
        state.cart[itemId].qty -= 1
      } else if (state.cart[itemId].qty === 1) {
        const newCart = state.cart.filter((item) => item.id !== payload.id)

        state.cart = newCart
      }

      // localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    getTotal: (state) => {
      let { quantity, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { qty, price } = cartItem

          const itemTotal = qty * price

          cartTotal.total += itemTotal
          cartTotal.quantity += qty

          return cartTotal
        },
        {
          quantity: 0,
          total: 0,
        }
      )

      state.cartTotalAmount = total
      state.cartTotalQuantity = quantity
    },
  },
  extraReducers: {},
})

export const {
  addToCart,
  removeFromCart,
  getTotal,
  decreaseQty,
  addToSavedForLaterFromStorage,
  addToSavedForLater,
  addToBagFromWishlist,
  addToCartFromStorageSuccess,
  addToCartFromStorageRequest,
} = cartSlice.actions
export default cartSlice.reducer
