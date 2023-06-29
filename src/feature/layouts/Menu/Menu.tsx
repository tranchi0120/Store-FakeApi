import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { fetSearchProducts } from '../../../redux/slice/SearchSlice'
import { useAppDispatch } from '../../../hooks/hook'
import Category from '../../components/Category/Category'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const dispatch = useAppDispatch()

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
        <div className='flex justify-between items-start mt-[20px] gap-8'>
          <Link to='/' className='logo'>
            <h2 className='text-[30px] font-thin hover:text-gray'>TC</h2>
          </Link>

          <div className='grow'>
            <div className='flex items-center bg-white px-1'>
              <input
                type='text'
                className='w-[100%] h-10 rounded-[3px] outline-none text-black px-2 text-[15px]'
                value={searchTerm}
                onChange={handleSearchTerm}
              />
              <Link
                to={`search/${searchTerm}`}
                className=' cursor-pointer bg-orange px-4 py-2 hover:bg-bgr-cart'
                onClick={() => handleSearch(searchTerm)}
              >
                <BsSearch size='22px' />
              </Link>
            </div>
            <div className='mt-2'>
              <Category />
            </div>
          </div>
          <div className=''>
            <AiOutlineShoppingCart color='white' size={'30px'} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
