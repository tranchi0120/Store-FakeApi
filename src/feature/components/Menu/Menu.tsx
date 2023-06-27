import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Menu = () => {
  return (
    <div>
      <div className='container'>
        <div className='flex justify-between items-start mt-[20px] gap-8'>
          <Link to='/' className='logo'>
            <h2 className='text-[30px] font-thin hover:text-gray'>TC SHOP</h2>
          </Link>

          <div className='grow'>
            <input type='text' className='w-[100%] h-10 rounded-[3px] outline-none text-black px-4 text-[15px]' />
            <div className='mt-2'>
              <ul className='flex gap-3 '>
                <li>
                  <Link to={'/'} className='cursor-pointer'>
                    phone
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>laptops</Link>
                </li>
                <li>
                  <Link to={'/'}>laptops</Link>
                </li>
              </ul>
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
