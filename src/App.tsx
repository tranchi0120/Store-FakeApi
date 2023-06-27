import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './feature/layouts/Header/Header'
// import Footer from './feature/layouts/Footer/Footer'

function App() {
  return (
    <div className='bg-bgr'>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default App
