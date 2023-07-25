import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

import { PiShoppingCartSimpleThin } from 'react-icons/pi'
import { BsSearch } from 'react-icons/bs'
import { fetSearchProducts } from '../../../redux/slice/SearchSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { selectCarts } from '../../../redux/slice/CartSlice'
import AvatarNav from './../../components/Avatar/Avatar'

const Menu = () => {
  const dispatch = useAppDispatch()

  const carts = useAppSelector(selectCarts)

  const [searchTerm, setSearchTerm] = useState<string>('')
  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setSearchTerm(event.target.value)
  }

  const handleSearch = (searchText: string) => {
    if (searchText) {
      dispatch(fetSearchProducts(searchText))
    }
    setSearchTerm('')
  }

  useEffect(() => {
    handleSearch(searchTerm)
  }, [])

  return (
    <div>
      <div className='flex mt-[20px] gap-6 items-center justify-center'>
        <div className='grow'>
          <div className='flex items-center  px-2 bg-white rounded-[5px]'>
            <input
              type='text'
              className='w-[100%] h-10 rounded-[3px] outline-none text-black px-2 text-[15px] bg-white '
              value={searchTerm}
              onChange={handleSearchTerm}
              placeholder='search...'
            />
            <Link to={`search/${searchTerm}`} className='cursor-pointer' onClick={() => handleSearch(searchTerm)}>
              <BsSearch />
            </Link>
          </div>
        </div>
        <Link to='/cart' className=' relative'>
          <PiShoppingCartSimpleThin color='black' size={'25px'} className='cursor-pointer' />
          <div
            className=' absolute -top-[10px] -right-[10px] border-none rounded-full
             bg-black text-white text-[13px] w-[20px] h-[20px]
              flex justify-center items-center'
          >
            {carts.carts.length}
          </div>
        </Link>
        <AvatarNav />
      </div>
    </div>
  )
}

export default Menu
