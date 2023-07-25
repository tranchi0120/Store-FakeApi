import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getAllProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import { useEffect, useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import { IProduct } from '../../../types/interfaces'
import ProductItem from '../ProductItem/ProductItem'
import Hero from '../../layouts/Hero/Hero'
import Sidebar from './../../layouts/Sidebar/Sidebar'
import { Pagination } from '@mui/material'

const Home = () => {
  const dispatch = useAppDispatch()
  const { products, isLoading } = useAppSelector(selectorProducts)
  const { Allcategories } = useAppSelector(selectorCategories)

  const [currentPage, setCurrentPage] = useState<number>(1)
  let limit = 10

  /*pagination */
  const totalPages = Math.ceil(products.length / limit)
  const startIndex = (currentPage - 1) * limit
  const endIndex = startIndex + limit
  const currentProducts = products.slice(startIndex, endIndex)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    setCurrentPage(page)
  }

  /* call products by category */
  const ProductCategoriesOne = products.filter((product: IProduct) => product.category === Allcategories[0]?.toString())
  const ProductCategoriesTwo = products.filter((product: IProduct) => product.category === Allcategories[1]?.toString())
  const ProductCategoriesThree = products.filter(
    (product: IProduct) => product.category === Allcategories[2]?.toString()
  )
  const ProductCategoriesFour = products.filter(
    (product: IProduct) => product.category === Allcategories[3]?.toString()
  )

  return (
    <div>
      <Hero />
      <div className='container  '>
        <div>
          <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black '>
            SEE OUT PRODUCT
          </div>
          {isLoading && <Loader />}
          <div className='flex gap-3'>
            <Sidebar />
            <div className='grid xl:grid-cols-3 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2 '>
              {currentProducts.map((product) => {
                return <ProductItem key={product.id} id={product.id} product={product} />
              })}
            </div>
          </div>

          <div className='flex items-center justify-center mt-6'>
            <Pagination count={totalPages} shape='rounded' page={currentPage} onChange={handlePageChange} />
          </div>

          <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
            {Allcategories[0]?.toString().toUpperCase()?.toString().toUpperCase()}
          </div>
          <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
            {ProductCategoriesOne.map((product) => {
              return <ProductItem key={product.id} id={product.id} product={product} />
            })}
          </div>
          {/* TWO */}
          <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
            {Allcategories[1]?.toString().toUpperCase()}
          </div>
          <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
            {ProductCategoriesTwo.map((product) => {
              return <ProductItem key={product.id} id={product.id} product={product} />
            })}
          </div>
          {/* THREE */}
          <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
            {Allcategories[2]?.toString().toUpperCase()}
          </div>
          <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
            {ProductCategoriesThree.map((product) => {
              return <ProductItem key={product.id} id={product.id} product={product} />
            })}
          </div>
          {/* FOUR */}
          <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
            {Allcategories[3]?.toString().toUpperCase()}
          </div>
          <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
            {ProductCategoriesFour.map((product) => {
              return <ProductItem key={product.id} id={product.id} product={product} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
