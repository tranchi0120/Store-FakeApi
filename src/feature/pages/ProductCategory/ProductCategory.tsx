import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getProductCategories, selectorCategories } from '../../../redux/slice/CategorySlice'
import ProductItem from '../products/ProductItem/ProductItem'
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
      {isLoading && <Loader className='flex items-center justify-center h-[800px] w-full' />}
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {productCategories.map((product) => {
          return (
            <ProductItem
              brand={product.brand}
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              category={product.category}
            />
          )
        })}
      </div>
    </div>
  )
}
export default ProductCategory
