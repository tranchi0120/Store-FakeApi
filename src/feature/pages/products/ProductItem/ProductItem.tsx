interface IProps {
  id?: number
  images?: string[]
  title: string
  price: number
  category: string
}

const ProductItem = ({ images, title, price, category }: IProps): JSX.Element => {
  return (
    <>
      <div className='flex flex-col gap-3 bg-white rounded-[8px] pb-4 relative'>
        <div className='w-[175px] h-[30px] bg-orange text-white absolute -left-1 top-3 flex items-center pl-3'>
          {category}
        </div>
        <div className=' h-[250px]'>
          <img src={images?.[0]} alt='image' className='w-full object-cover h-full' />
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <span>brand:</span>
          <h3 className='text-[18x] font-[500] block'>Samsung</h3>
        </div>
        <h3 className='text-center font-[500] text-[22px]'>{title}</h3>
        <div className='flex justify-around'>
          <span className='text-gray text-[16px] line-through'>$900</span>
          <span className='block text-[18px] text-black font-bold'>${price}</span>
          <span className='text-orange text-[16px] '>( sale $15%)</span>
        </div>
      </div>
    </>
  )
}

export default ProductItem
