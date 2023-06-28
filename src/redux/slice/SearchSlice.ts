import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/interfaces'
import { RootState } from '../store'
import { axiosClient } from '../../api/AxiosClient'

interface ISearch {
  isLoading: boolean
  isError: boolean
  searchProducts: IProduct[]
}

const initialState: ISearch = {
  isLoading: false,
  isError: false,
  searchProducts: []
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetSearchProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetSearchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.isLoading = false
        state.searchProducts = action.payload
      })
      .addCase(fetSearchProducts.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  }
})

export const fetSearchProducts = createAsyncThunk('search/searchProduct', async (searchTerm: string) => {
  const res = await axiosClient.get(`products/search?q=${searchTerm}`)
  const data = await res.data.products
  return data
})

export const searchProductItem = (state: RootState): ISearch => state.search
export default searchSlice.reducer
