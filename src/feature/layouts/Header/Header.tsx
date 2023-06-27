import { useAppDispatch } from '../../../hooks/hook'
import { getAllCategories } from '../../../redux/slice/CategorySlice'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'

const Header = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  return (
    <div className='bg-orange w-auto text-white h-[170px] py-6'>
      <Navbar />
      <Menu />
    </div>
  )
}

export default Header
