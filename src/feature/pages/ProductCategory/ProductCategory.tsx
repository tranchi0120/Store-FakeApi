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

  console.log(productCategories)

  return (
    <div className=''>
      <div className='container'>
        <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
          {productCategories[0]?.category?.toString().toUpperCase()}
        </div>
        {isLoading && <Loader />}
        <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
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
