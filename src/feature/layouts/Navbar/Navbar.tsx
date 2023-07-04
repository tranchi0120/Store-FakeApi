import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { logoutSuccess, selectAuthUser } from '../../../redux/slice/AuthSlice'
import notification from '../../../notification/notification'
import { ERouterLink } from '../../../router/RouterLink'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { AuthenUser } = useAppSelector(selectAuthUser)

  const handleLogout = () => {
    dispatch(logoutSuccess())
    notification.success('logout success')
    navigate(ERouterLink.login)
  }

  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between items-center border-b-[0.5px] border-[#d9c7c7] py-3'>
          <Link to={'/'} className='flex gap-2 text-[32px] font-[500]'>
            STORE
          </Link>
          <div className='group flex gap-6 max-[590px]:flex-col '>
            <div className='flex gap-3 items-center cursor-pointer  '>
              <Avatar src={AuthenUser?.image} alt={'avater'} className='bg-white' />
              <span className=' text-[18px] font-[400]'>{AuthenUser?.username}</span>
            </div>
            <button
              className='bg-white text-red-bold border-none rounded-md px-4 hover:bg-red-600 hover:text-white max-[590px]:h-[40px]'
              onClick={() => handleLogout()}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
