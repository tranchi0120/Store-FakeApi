import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between items-center py-3 '>
          <Link to={'/'} className='flex gap-2 text-[32px] font-[500]'>
            STORE
          </Link>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
