import Product from '../products/Product'

const Home = () => {
  return (
    <div className='bg-bgr container'>
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '>SEE OUT PRODUCT</div>

      <Product />
      <div className='p-[20px] bg-white mt-8 font-[600] text-[22px] border-l-[6px] border-orange '></div>
      <Product />
    </div>
  )
}

export default Home
