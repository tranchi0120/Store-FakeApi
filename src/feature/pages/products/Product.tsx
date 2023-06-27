import ProductItem from './ProductItem/ProductItem'

const Product = () => {
  return (
    <div className='container'>
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>SEE OUT PRODUCT</div>
      <div className='grid grid-cols-4 gap-8 mt-6'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default Product
