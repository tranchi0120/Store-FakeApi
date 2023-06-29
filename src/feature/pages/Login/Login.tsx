import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
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
        notification.error('login failed')
      } else {
        navigate(ERouterLink.home)
        notification.success('login success')
      }
    }
  }

  useEffect(() => {
    if (token) {
      navigate(ERouterLink.home)
    }
  }, [])

  return (
    <div
      style={{ backgroundImage: `url(${bgr})` }}
      className='bg-no-repeat bg-cover bg-center flex items-center justify-center h-[100vh]'
    >
      <div
        className='bg-white w-[900px] h-[500px] flex items-center 
      justify-center flex-col border-none shadow-xl rounded-[12px] p-[15px] text-white'
      >
        <h3 className='text-black text-[28px] font-light'> SIGN IN</h3>
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

          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Login
