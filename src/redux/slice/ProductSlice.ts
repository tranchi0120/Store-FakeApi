import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../api/AxiosClient'
import { RootState } from '../store'
import { IProduct } from '../../types/interfaces'

interface IProductData {
  products: IProduct[]
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

const initialState: IProductData = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  }
})

export const getAllProduct = createAsyncThunk('product/getAllProduct', async () => {
  try {
    const res = await axiosClient.get('products')
    const data = await res.data.products
    return data
  } catch (error) {
    throw new Error('failed get to product')
  }
})

export const selectorProducts = (state: RootState): IProductData => state.product
export default productSlice.reducer
