import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import { useAppSelector } from '../../../hooks/hook'
import { searchProductItem } from '../../../redux/slice/SearchSlice'
import ProductItem from '../ProductItem/ProductItem'

const SearchProduct = () => {
  const { searchProducts, isLoading } = useAppSelector(searchProductItem)

  if (searchProducts.length === 0) {
    return (
      <div className=''>
        <div className='container flex items-center justify-center flex-col gap-6 h-[66vh]'>
          <p className='text-[30px] font-thin'>The product you are looking for is currently unavailable</p>
          <Link to='/' className='link_404 bg-red-bold font-popins'>
            Go to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      {isLoading && <Loader />}
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {!isLoading &&
          searchProducts.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
      </div>
    </div>
  )
}

export default SearchProduct
