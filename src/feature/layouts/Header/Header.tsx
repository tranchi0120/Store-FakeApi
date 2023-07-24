import { AiOutlineClose } from 'react-icons/ai'
import { useAppDispatch } from '../../../hooks/hook'
import { getAllCategories } from '../../../redux/slice/CategorySlice'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const [close, setClose] = useState<boolean>(false)
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

  const handleCloseSingUp = () => {
    setClose(true)
  }

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  return (
    <div className='bg-white w-auto text-black pb-6 scroll-smooth'>
      <a
        href='#'
        className={`z-50 w-10 h-10 flex items-center justify-center rounded-md bg-black text-white fixed right-[50px]  ${
          scrollY > 250 ? 'bottom-[50px] visible' : '-bottom-[50px] invisible'
        } duration-200 cursor-pointer`}
      >
        <IoIosArrowUp size='25px' color='white' />
      </a>
      <div
        className={`bg-black text-white text-center py-2 flex items-center justify-center relative duration-200 ${
          close ? ' -translate-y-[500px] hidden' : 'translate-y-0 block'
        }`}
      >
        <span className='text-[15px]'>
          Sign up GET 20% OFF for your first order.{' '}
          <a href='#!' className=' font-bold !decoration-solid'>
            Singup Now
          </a>
        </span>
        <div className='absolute right-3 top-3 cursor-pointer' onClick={() => handleCloseSingUp()}>
          <AiOutlineClose size={20} />
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header

// update
