import * as React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useState, useEffect } from 'react'
import { userLogin } from '../../../redux/slice/AuthSlice'
import { IUserLogin } from '../../../types/interfaces'
import { useAppDispatch } from '../../../hooks/hook'
import notification from '../../../notification/notification'
import { useNavigate } from 'react-router-dom'
import { ERouterLink } from '../../../router/RouterLink'
import getToken from '../../../utils/getToken'
import bgr from '../../../assets/images/bgr-login.avif'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const token = getToken()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (value: IUserLogin): Promise<void> => {
    if (formData.username.length === 0 || formData.password.length === 0) {
      notification.warning("don't leave username or password blank")
    } else {
      const result = await dispatch(userLogin(value))
      if (result.type === 'auth/login/rejected') {
        notification.error('Incorrect account or password')
      } else {
        navigate(ERouterLink.cart)
        notification.success('login success')
      }
    }
  }

  useEffect(() => {
    if (token) {
      navigate(ERouterLink.cart)
    }
  }, [])

  return (
    <div
      // style={{ backgroundImage: `url(${bgr})` }}
      className='bg-no-repeat bg-cover bg-center flex items-center justify-center h-[600px]'
    >
      <div
        className='bg-white w-[600px] h-[400px] flex items-center 
      justify-center flex-col border-none shadow-xl rounded-[12px] p-[15px] text-white max-[1023px]:mx-[20px]'
      >
        <h3 className='text-black text-[28px] font-bold '>LOG IN</h3>
        <Box
          component='form'
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit(formData)
          }}
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            fullWidth
            id='username'
            label='username'
            name='username'
            autoComplete='username'
            onChange={handleOnChange}
          />
          <TextField
            margin='normal'
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleOnChange}

          />

          <button type='submit' className='text-white bg-black rounded-[5px] border-none w-full p-3 mt-6'>
            LOG IN
          </button>
          <Grid container className='mt-5'>
            <Grid item xs>
              <a href='#!' className='text-black '>
                Forgot password?
              </a>
            </Grid>
            <Grid item>
              <a href='#!' className='text-black  '>
                Don't have an account? Sign Up
              </a>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Login
