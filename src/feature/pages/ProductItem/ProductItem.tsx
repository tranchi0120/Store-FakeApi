import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../utils/FormatPrice'

interface IProps {
  id: number
  images?: string[]
  title: string
  price: number
  category: string
  discountPercentage: number
  brand: string
}

const ProductItem = ({ id, images, title, price, category, discountPercentage, brand }: IProps): JSX.Element => {
  let discountedPrice = price - price * (discountPercentage / 100)

  const newUrl =
    'https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  return (
    <>
      <div className='relative flex flex-col gap-3 bg-white rounded-[8px] pb-4  shadow-3xl pt-2 group '>
        <div className='pr-[15px] h-[30px] bg-red-bold text-white absolute -left-1 top-3 flex items-center pl-3 z-30'>
          {category}
        </div>
        <div className='h-[250px] overflow-hidden duration-300'>
          <img src={images?.[0] || newUrl} alt='image' className='w-full object-contain h-full hover:scale-[1.2]' />
        </div>
        <div className='flex gap-2 items-center justify-center mt-4'>
          <span>brand:</span>
          <h3 className='text-[18x] font-[500] block'>{brand}</h3>
        </div>
        <h3 className='text-center font-[500] text-[22px]'>{title}</h3>
        <div className='flex justify-around'>
          <span className='text-gray text-[16px] line-through'>{formatPrice(price)}</span>
          <span className='block text-[18px] text-black font-bold'>
            {discountedPrice ? formatPrice(discountedPrice) : ''}
          </span>
          <span className='text-red-bold text-[16px] '>(sale {discountPercentage}%)</span>
        </div>
        {/* hover eye and add */}
        <div
          className=' absolute top-0 right-0 
        translate-x-[30px]  group-hover:translate-x-[0px] 
        group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-300'
        >
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-bold'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl '
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductItem
