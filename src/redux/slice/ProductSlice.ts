import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../api/AxiosClient'
import { RootState } from '../store'
import { IProduct } from '../../types/interfaces'

interface IProductData {
  products: IProduct[]
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  singelProduct: IProduct[]
}

const initialState: IProductData = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  singelProduct: []
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
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleProduct.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.isLoading = false
        state.isSuccess = true
        state.singelProduct = action.payload
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  }
})

export const getAllProduct = createAsyncThunk('product/getAllProduct', async () => {
  const res = await axiosClient.get('products')
  const data = await res.data.products
  return data
})

export const getSingleProduct = createAsyncThunk('product/getSingleProduct', async (id: number) => {
  const res = await axiosClient.get(`products/${id}`)
  return res.data
})

export const selectorProducts = (state: RootState): IProductData => state.product
export default productSlice.reducer
