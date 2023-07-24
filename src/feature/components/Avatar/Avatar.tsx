import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { logoutSuccess, selectAuthUser } from '../../../redux/slice/AuthSlice'
import { useNavigate } from 'react-router'
import notification from '../../../notification/notification'
import { ERouterLink } from '../../../router/RouterLink'

const AvatarNav = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const { AuthenUser } = useAppSelector(selectAuthUser)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    dispatch(logoutSuccess())
    notification.success('logout success')
    navigate(ERouterLink.login)
  }

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src={AuthenUser?.image} alt={'avater'} className='bg-white' />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <div>
            <div className=' flex gap-3 flex-col p-3'>
              <span className=' text-[18px] font-[400]'>{AuthenUser?.username}</span>
              <button
                className='hover:bg-red-200 hover:text-red-bold border-none rounded-md px-4 bg-red-600 text-white max-[590px]:h-[40px] py-2'
                onClick={() => handleLogout()}
              >
                LogOut
              </button>
            </div>
          </div>
        </Menu>
      </Box>
    </div>
  )
}

export default AvatarNav
