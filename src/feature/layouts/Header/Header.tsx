import { useAppDispatch } from '../../../hooks/hook'
import { getAllCategories } from '../../../redux/slice/CategorySlice'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const dispatch = useAppDispatch()

  // Handle scroll event
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
  }, [dispatch])

  return (
    <div className='bg-bgr-footer w-auto text-black pb-3 scroll-smooth'>
      <a
        href='#'
        className={`z-50 w-10 h-10 flex items-center justify-center rounded-md bg-black text-white fixed right-[50px] ${
          scrollY > 250 ? 'bottom-[50px] visible' : '-bottom-[50px] invisible'
        } duration-200 cursor-pointer`}
      >
        <IoIosArrowUp size='25px' color='white' />
      </a>

      <Navbar />
    </div>
  )
}

export default Header
