import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TbMenu2 } from 'react-icons/tb'

import { PiShoppingCartSimpleThin } from 'react-icons/pi'
import { BsSearch } from 'react-icons/bs'
import { fetSearchProducts } from '../../../redux/slice/SearchSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { selectCarts } from '../../../redux/slice/CartSlice'
import Sidebar from '../Sidebar/Sidebar'

const Menu = () => {
  const dispatch = useAppDispatch()

  const carts = useAppSelector(selectCarts)

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleShowCategoryList = () => {
    setIsShow(!isShow)
  }

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
      <div className='container'>
        <div className='mt-2'>
          <Sidebar isShow={isShow} handleShowCategoryList={handleShowCategoryList} />
        </div>
        <div className='flex justify-between items-start mt-[20px] gap-8'>
          <div onClick={() => handleShowCategoryList()}>
            <TbMenu2 style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
          </div>
          <div className='grow'>
            <div className='flex items-center bg-white px-1'>
              <input
                type='text'
                className='w-[100%] h-10 rounded-[3px] outline-none text-black px-2 text-[15px]'
                value={searchTerm}
                onChange={handleSearchTerm}
                placeholder='Please enter the product information you are looking for...'
              />
              <Link
                to={`search/${searchTerm}`}
                className=' cursor-pointer bg-red-bold px-4 py-2 hover:bg-red-700'
                onClick={() => handleSearch(searchTerm)}
              >
                <BsSearch size='22px' />
              </Link>
            </div>
          </div>
          <Link to='/cart' className=' relative'>
            <PiShoppingCartSimpleThin color='white' size={'35px'} className='cursor-pointer' />
            <div
              className=' absolute -top-[10px] -right-[10px] border-none rounded-full
             bg-white text-red-bold w-[25px] h-[25px]
              flex justify-center items-center'
            >
              {carts.carts.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
