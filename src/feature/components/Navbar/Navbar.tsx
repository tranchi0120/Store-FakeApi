import './Navbar.scss'
import { BiLogoFacebookCircle, BiLogoLinkedinSquare } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='container'>
      <div className="nav">
        <div className="nav-main">
          <div className="nav-left">
            <div className="nav-left-info">
              <BiLogoFacebookCircle />
              <BiLogoLinkedinSquare />
            </div>
          </div>
          <div className="nav-right">
            <button className='text-orange-400 bg-orange-50' >Logout</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar