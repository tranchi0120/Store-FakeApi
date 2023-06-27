import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../api/AxiosClient'
import { RootState } from '../store'

export type ICategories = string[]

interface ICategoriesState {
  categories: ICategories[]
  isLoading: boolean
  isError: boolean
}

const initialState: ICategoriesState = {
  categories: [],
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
        state.categories = action.payload
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  }
})

export const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
  const res = await axiosClient.get('products/categories')
  return res.data
})

export const selectorCategories = (state: RootState): ICategoriesState => state.category
export default categorySlice.reducer
