import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import './Header.scss'

const Header = () => {
  return (
    <div className='bg-orange w-auto text-white h-[170px] py-6'>
      <Navbar />
      <Menu />
    </div>
  )
}

export default Header
