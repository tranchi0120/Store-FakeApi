import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between items-center py-6  max-[450px]:flex-col max-[450px]:justify-start max-[450px]:items-start max-[450px]:gap-6'>
          <Link to={'/'} className='flex gap-2 text-[32px] text-white font-[500] '>
            STORE
          </Link>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
