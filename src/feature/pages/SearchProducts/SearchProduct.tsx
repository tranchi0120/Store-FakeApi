import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import { useAppSelector } from '../../../hooks/hook'
import { searchProductItem } from '../../../redux/slice/SearchSlice'
import ProductItem from '../ProductItem/ProductItem'

const SearchProduct = () => {
  const { searchProducts, isLoading } = useAppSelector(searchProductItem)
  return (
    <div className='container'>
      {isLoading && <Loader />}
      <div className='grid xl:grid-cols-4 gap-8  lg:grid-cols-3 sm:grid-cols-2 mt-8  mb-24'>
        {!isLoading &&
          searchProducts.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
      </div>
      {searchProducts.length === 0 && (
        <div className='flex items-center justify-center flex-col gap-6 h-[66vh]'>
          <p className='text-[30px] font-thin'>The product you are looking for is currently unavailable</p>
          <Link to='/' className='link_404 bg-black text-white font-popins'>
            Go to Home
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchProduct
