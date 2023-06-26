import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { ERouterLink } from './RouterLink'
import { useEffect } from 'react'

import NotFound from '../feature/pages/NotFound/NotFound'
import Login from '../feature/pages/Login/Login'
import App from '../App'
import Home from '../feature/pages/Home/Home'
import getToken from '../utils/getToken'
import Product from '../feature/pages/products/Product'

interface Props {
  children: React.ReactNode
}

export const PrivateRouter = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()

  const token = getToken()

  useEffect(() => {
    if (token.length > 0) {
      navigate(ERouterLink.home)
    } else {
      navigate(ERouterLink.login)
    }
  }, [])
  return <>{children}</>
}

const router = createBrowserRouter([
  {
    path: ERouterLink.login,
    element: <Login />
  },
  {
    path: ERouterLink.notfound,
    element: <NotFound />

  },
  {
    path: ERouterLink.home,
    element: (
      <PrivateRouter>
        <App />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ERouterLink.product,
        element: <Product />
      }

    ]
  }
])

export default router