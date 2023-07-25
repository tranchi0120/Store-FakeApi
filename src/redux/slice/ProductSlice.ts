import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../api/AxiosClient'
import { RootState } from '../store'
import { IProduct } from '../../types/interfaces'

interface IProductData {
  products: IProduct[]
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  singleProduct: IProduct | null
}

const initialState: IProductData = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  singleProduct: null
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
      .addCase(getSingleProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
        state.isLoading = false
        state.isSuccess = true
        state.singleProduct = action.payload
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
    builder
      .addCase(getLimitProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLimitProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(getLimitProduct.rejected, (state) => {
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

export const getLimitProduct = createAsyncThunk('product/getLimitProduct', async (limit: number) => {
  const res = await axiosClient.get(`products?limit=${limit}`)
  return res.data.products
})

export const selectorProducts = (state: RootState): IProductData => state.product
export default productSlice.reducer
