import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/interfaces'
import { RootState } from '../store'
import {} from 'react'
import notification from '../../notification/notification'
interface IStateCart {
  carts: IProduct[]
}

const cartData = localStorage.getItem('cart')
const initialCarts = cartData ? JSON.parse(cartData) : []

const storeInLocalStorage = (data: IProduct[]) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

const initialState: IStateCart = {
  carts: initialCarts
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isItemInCart = state.carts.find((item) => item.id === action.payload.id)

      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity
            if (tempQty > item.stock) {
              tempQty = item.stock
              notification.success(`The number of products is only ${item.stock}`)
            }
            return {
              ...item,
              quantity: tempQty
            }
          } else {
            return item
          }
        })

        state.carts = tempCart
        storeInLocalStorage(state.carts)
      } else {
        state.carts.push(action.payload)
        storeInLocalStorage(state.carts)
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const tempCart = state.carts.filter((cart) => cart.id !== action.payload)
      state.carts = tempCart
      storeInLocalStorage(state.carts)
      notification.success('Delete product successfully')
    },
    clearCart: (state) => {
      state.carts = []
      storeInLocalStorage(state.carts)
      notification.success('Delete all products')
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
