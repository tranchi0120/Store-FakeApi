import Loader from '../../../components/Loader/Loader'
import { useAppSelector } from '../../../hooks/hook'
import { searchProductItem } from '../../../redux/slice/SearchSlice'
import ProductItem from '../products/ProductItem/ProductItem'

const SearchProduct = () => {
  const { searchProducts, isLoading } = useAppSelector(searchProductItem)

  return (
    <div className='container'>
      {isLoading && <Loader className='flex items-center justify-center h-[800px]' />}
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {!isLoading &&
          searchProducts.map((product) => {
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

export default SearchProduct
