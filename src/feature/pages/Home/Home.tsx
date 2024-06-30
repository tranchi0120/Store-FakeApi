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
import { RiFunctionLine } from 'react-icons/ri'

const Home = () => {
  const dispatch = useAppDispatch()
  const { products, isLoading } = useAppSelector(selectorProducts)
  const { Allcategories } = useAppSelector(selectorCategories)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleShowCategory = () => {
    setIsShow(!isShow)
  }

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
  if (Allcategories.length === 0 && products.length === 0) {
    return null
  }

  console.log('Allcategories', Allcategories)
  console.log('products', products)
  const productCategories = Allcategories.map((category) => {
    return products.filter((product: IProduct) => product.category === category.slug)
  })

  return (
    <div>
      <Hero />
      <div className='container  '>
        <div>
          <div
            className='hidden max-[450px]:block cursor-pointer mt-3 w-[30px] h-[30px] '
            onClick={() => handleShowCategory()}
          >
            <RiFunctionLine size='30px' color='black' />
          </div>
          <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black '>
            SEE OUT PRODUCT
          </div>
          {isLoading && <Loader />}
          <div className='flex gap-3'>
            <div className=' relative'>
              <Sidebar isShow={isShow} />
            </div>
            <div className='grid xl:grid-cols-3 gap-8 mt-6 lg:grid-cols-2 sm:grid-cols-2  '>
              {currentProducts.map((product) => {
                return <ProductItem key={product.id} id={product.id} product={product} />
              })}
            </div>
          </div>

          <div className='flex items-center justify-center mt-6'>
            <Pagination count={totalPages} shape='rounded' page={currentPage} onChange={handlePageChange} />
          </div>

          {!isLoading &&
            productCategories.slice(0, 4).map((categoryProducts, index) => (
              <div key={index}>
                <div className='p-[20px] bg-brand mt-8 font-[600] text-[22px] border-l-[6px] border-black'>
                  {Allcategories[index]?.name.toUpperCase()}
                </div>
                <div className='grid xl:grid-cols-4 gap-8 mt-6 lg:grid-cols-3 sm:grid-cols-2'>
                  {categoryProducts.map((product) => (
                    <ProductItem key={product.id} id={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
