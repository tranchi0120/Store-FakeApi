import { useAppSelector } from '../../../hooks/hook'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import Product from '../products/Product'

const Home = () => {
  const { productCategories, isLoading } = useAppSelector(selectorCategories)
  console.log(productCategories, isLoading)

  return (
    <div className='bg-bgr container'>
      <Product />
    </div>
  )
}

export default Home
