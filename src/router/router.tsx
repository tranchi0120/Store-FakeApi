import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import NotFound from '../feature/pages/NotFound/NotFound'
import Login from '../feature/pages/Login/Login'
import App from '../App'
import Home from '../feature/pages/Home/Home'
import getToken from '../utils/getToken'
import Product from '../feature/pages/products/Product'
import { ERouterLink } from './RouterLink'
import ProductDetail from '../feature/pages/ProductDetail/ProductDetail'
import ProductCategory from '../feature/pages/ProductCategory/ProductCategory'
import SearchProduct from '../feature/pages/SearchProducts/SearchProduct'

interface Props {
  children: React.ReactNode
}

const PrivateRouter = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate()

  const token = getToken()

  useEffect(() => {
    if (!token) {
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
      },
      {
        path: ERouterLink.productId,
        element: <ProductDetail />
      },
      {
        path: ERouterLink.categoryId,
        element: <ProductCategory />
      },
      {
        path: ERouterLink.searchItem,
        element: <SearchProduct />
      },
      {
        path: ERouterLink.search,
        element: <Home />
      }
    ]
  }
])

export default router