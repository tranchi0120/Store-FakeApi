import { BiLogoFacebookCircle, BiLogoLinkedinSquare } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='flex justify-between items-center border-b-[0.5px] border-[#d9c7c7]'>
          <div className='flex gap-2'>
            <BiLogoFacebookCircle color='white' size={'30px'} className='hover:!text-blue-500 cursor-pointer' />
            <BiLogoLinkedinSquare color='white' size={'30px'} className='hover:!text-blue-500 cursor-pointer' />
          </div>
          <div className='nav-right'>
            <button className='text-white bg-orange h-[45px] text-[20px] font-[500] hover:text-gray'>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
