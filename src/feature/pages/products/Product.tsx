import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getAllProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import { useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import Loader from '../../../components/Loader/Loader'

const Product = () => {
  const dispatch = useAppDispatch()

  const { products, isLoading } = useAppSelector(selectorProducts)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [])

  return (
    <div className='container'>
      {isLoading && <Loader className='flex items-center justify-center h-[800px]' />}
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            images={product.images}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Product
