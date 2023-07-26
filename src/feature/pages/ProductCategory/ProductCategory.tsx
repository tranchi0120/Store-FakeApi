// ProductCategory.tsx
import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getProductCategories, selectorCategories } from '../../../redux/slice/CategorySlice'
import ProductItem from '../ProductItem/ProductItem'
import Loader from '../../../components/Loader/Loader'
import { Breadcrumbs } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const ProductCategory = () => {
  const dispatch = useAppDispatch()
  const { category } = useParams()
  const { productCategories, isLoading } = useAppSelector(selectorCategories)
  const location = useLocation()

  useEffect(() => {
    if (category) {
      dispatch(getProductCategories(category))
    }
  }, [category, dispatch])

  const previousLink = location.state?.previousLink || '/'

  return (
    <div className='mt-5'>
      <div className='container'>
        <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
          <Link to={previousLink} color='inherit'>
            {previousLink === '/' ? 'Home' : previousLink}
          </Link>
          <span className=' pointer-events-none text-black'>{category}</span>
        </Breadcrumbs>
        <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
          {category?.toUpperCase()}
        </div>
        {isLoading && <Loader />}
        <div className='grid max-[640px]:grid-cols-2 grid-cols-4 gap-8 mt-6 max-[768px]:grid-cols-3 max-[450px]:grid-cols-1 '>
          {!isLoading &&
            productCategories.map((product) => {
              return <ProductItem key={product.id} id={product.id} product={product} />
            })}
        </div>
      </div>
    </div>
  )
}

export default ProductCategory
