import { useAppDispatch } from '../../../hooks/hook'
import { getAllCategories } from '../../../redux/slice/CategorySlice'
import Menu from '../Menu/Menu'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const dispatch = useAppDispatch()

  // scroll top
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  return (
    <div className='bg-red-bold w-auto text-white py-6 scroll-smooth'>
      <a
        href='#'
        className={
          scrollY > 250
            ? ' z-50 w-12 h-12 bg-red-bold flex items-center justify-center rounded-md fixed right-[50px] bottom-[50px] visible duration-200 cursor-pointer '
            : ' z-50 w-12 h-12 bg-red-bold flex items-center justify-center rounded-md fixed right-[50px] -bottom-[50px] invisible duration-200 cursor-pointer '
        }
      >
        <IoIosArrowUp size='30px' color='white' />
      </a>
      <Navbar />
      <Menu />
    </div>
  )
}

export default Header
