import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosClient } from '../../api/AxiosClient'
import { IAuthen, IUserLogin } from '../../types/interfaces'

export const UserIfo = 'userInfo'
interface AuthState {
  isLoading: boolean
  isError: string
  isSuccess: boolean
  AuthenUser: IAuthen[]
}

export const initialState: AuthState = {
  isLoading: false,
  isError: '',
  isSuccess: false,
  AuthenUser: []
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.AuthenUser = []
      localStorage.removeItem(UserIfo)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = ''
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.AuthenUser = action.payload
        if (action.payload) {
          localStorage.setItem(UserIfo, action.payload.token)
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message || 'Unknown error occurred.'
      })
  }
})

export const userLogin = createAsyncThunk('auth/login', async (user: IUserLogin) => {
  try {
    const response = await axiosClient.post('auth/login', user)
    return response.data
  } catch (error) {
    throw new Error('login error: ' + error)
  }
})

export const { logoutSuccess } = authSlice.actions
export default authSlice.reducer
