import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getAllProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import { useEffect } from 'react'
import Loader from '../../../components/Loader/Loader'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import { IProduct } from '../../../types/interfaces'
import ProductItem from '../ProductItem/ProductItem'
import Hero from '../../layouts/Hero/Hero'

const Home = () => {
  const dispatch = useAppDispatch()
  const { products, isLoading } = useAppSelector(selectorProducts)
  const { Allcategories } = useAppSelector(selectorCategories)

  const ProductCategoriesOne = products.filter((product: IProduct) => product.category === Allcategories[0]?.toString())
  const ProductCategoriesTwo = products.filter((product: IProduct) => product.category === Allcategories[1]?.toString())
  const ProductCategoriesThree = products.filter(
    (product: IProduct) => product.category === Allcategories[2]?.toString()
  )
  const ProductCategoriesFour = products.filter(
    (product: IProduct) => product.category === Allcategories[3]?.toString()
  )

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  return (
    <div>
      <Hero />
      <div className='container '>
        <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-red-bold '>
          SEE OUT PRODUCT
        </div>
        {isLoading && <Loader />}
        <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2 '>
          {products.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
        </div>
        <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-red-bold '>
          {Allcategories[0]}
        </div>
        <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
          {ProductCategoriesOne.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
        </div>
        {/* TWO */}
        <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-red-bold '>
          {Allcategories[1]}
        </div>
        <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
          {ProductCategoriesTwo.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
        </div>
        {/* THREE */}
        <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-red-bold '>
          {Allcategories[2]}
        </div>
        <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
          {ProductCategoriesThree.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
        </div>
        {/* FOUR */}
        <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-red-bold '>
          {Allcategories[3]}
        </div>
        <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
          {ProductCategoriesFour.map((product) => {
            return <ProductItem key={product.id} id={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
