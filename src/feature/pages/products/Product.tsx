import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getAllProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import { useEffect } from 'react'
import ProductItem from './ProductItem/ProductItem'
import Loader from '../../../components/Loader/Loader'
import { selectorCategories } from '../../../redux/slice/CategorySlice'
import { IProduct } from '../../../types/interfaces'

const Product = () => {
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
    <div className='container'>
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>SEE OUT PRODUCT</div>
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
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>
        {Allcategories[0]}
      </div>
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {ProductCategoriesOne.map((product) => (
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
      {/* TWO */}
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>
        {Allcategories[1]}
      </div>
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {ProductCategoriesTwo.map((product) => (
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
      {/* THREE */}
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>
        {Allcategories[2]}
      </div>
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {ProductCategoriesThree.map((product) => (
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
      {/* FOUR */}
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>
        {Allcategories[3]}
      </div>
      <div className='grid grid-cols-4 gap-8 mt-6'>
        {ProductCategoriesFour.map((product) => (
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
