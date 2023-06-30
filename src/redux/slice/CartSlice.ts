import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/interfaces'
import { RootState } from '../store'

interface IStateCart {
  carts: IProduct[]
  cartTotalQuantity: number
  cartTotalItem: number
}

const cartData = localStorage.getItem('cart')
const initialCarts = cartData ? JSON.parse(cartData) : []

const storeInLocalStorage = (data: IProduct[]) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

const initialState: IStateCart = {
  carts: initialCarts,
  cartTotalQuantity: 0,
  cartTotalItem: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1
      } else {
        const tempProduct = { ...action.payload, quantity: 1 }
        state.carts.push(tempProduct)
      }

      storeInLocalStorage(state.carts)
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const tempCart = state.carts.filter((cart) => cart.id !== action.payload)
      state.carts = tempCart
      storeInLocalStorage(state.carts)
    },
    clearCart: (state) => {
      state.carts = []
      storeInLocalStorage(state.carts)
    },
    decreaseCart: (state, action: PayloadAction<IProduct>) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
      if (state.carts[itemIndex].quantity > 1) {
        state.carts[itemIndex].quantity -= 1
      } else {
        state.carts[itemIndex].quantity === 1
      }
      storeInLocalStorage(state.carts)
    }
  }
})

export const { addToCart, removeCart, clearCart, decreaseCart } = cartSlice.actions
export const selectCarts = (state: RootState): IStateCart => state.cart
export default cartSlice.reducer
