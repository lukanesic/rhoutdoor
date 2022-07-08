import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  cartTotalAmonut: 0,
  cartTotalQuantity: 0,
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

      // ASYNCSTORAGE ADD
    },
    removeFromCart: (state) => {
      const newCart = state.cart.filter((item) => item.id !== payload.id)
      state.cart = newCart

      // REMOVE FROM ASYNCSTORAGE
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

      state.cartTotalAmonut = total
      state.cartTotalQuantity = quantity
    },
  },
  extraReducers: {},
})

export const { addToCart, removeFromCart, getTotal, decreaseQty } =
  cartSlice.actions
export default cartSlice.reducer
