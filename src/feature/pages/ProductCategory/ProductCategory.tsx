import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getProductCategories, selectorCategories } from '../../../redux/slice/CategorySlice'
import ProductItem from '../ProductItem/ProductItem'
import Loader from '../../../components/Loader/Loader'

const ProductCategory = () => {
  const dispatch = useAppDispatch()
  const { category } = useParams()

  const { productCategories, isLoading } = useAppSelector(selectorCategories)

  useEffect(() => {
    if (category) {
      dispatch(getProductCategories(category))
    }
  }, [category, dispatch])

  return (
    <div className='container'>
      {isLoading && <Loader />}
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {!isLoading &&
          productCategories.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
      </div>
    </div>
  )
}
export default ProductCategory
