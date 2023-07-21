import AvatarNav from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between items-center border-b-[0.5px] border-[#d9c7c7] py-3'>
          <Link to={'/'} className='flex gap-2 text-[32px] font-[500]'>
            STORE
          </Link>
          {/*  */}
          <AvatarNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
