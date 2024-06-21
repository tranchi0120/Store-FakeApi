import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../api/AxiosClient'
import { RootState } from '../store'
import { IProduct } from '../../types/interfaces'

export type ICategories = {
  name: String
  slug: String
}

interface ICategoriesState {
  Allcategories: ICategories[]
  productCategories: IProduct[]
  isLoading: boolean
  isError: boolean
}

const initialState: ICategoriesState = {
  Allcategories: [],
  productCategories: [],
  isLoading: false,
  isError: false
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCategories.fulfilled, (state, action: PayloadAction<ICategories[]>) => {
        state.isLoading = false
        state.Allcategories = action.payload
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductCategories.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.isLoading = false
        state.productCategories = action.payload
      })
      .addCase(getProductCategories.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  }
})

export const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
  const res = await axiosClient.get('products/categories')
  return res.data
})

export const getProductCategories = createAsyncThunk('categories/getProductCategories', async (category: string) => {
  const res = await axiosClient.get(`products/category/${category}`)
  return res.data.products
})

export const selectorCategories = (state: RootState): ICategoriesState => state.category
export default categorySlice.reducer
