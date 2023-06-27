import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface IProps {
  id?: number
  images?: string[]
  title: string
  price: number
  category: string
}

const ProductItem = ({ id, images, title, price, category }: IProps): JSX.Element => {
  return (
    <>
      <div className='relative flex flex-col gap-3 bg-white rounded-[8px] pb-4  shadow-3xl pt-2 group hover:scale-105'>
        <div className='pr-[15px] h-[30px] bg-orange text-white absolute -left-1 top-3 flex items-center pl-3 z-30'>
          {category}
        </div>
        <div className='h-[250px]'>
          <img src={images?.[0]} alt='image' className='w-full object-contain h-full ' />
        </div>
        <div className='flex gap-2 items-center justify-center mt-4'>
          <span>brand:</span>
          <h3 className='text-[18x] font-[500] block'>Samsung</h3>
        </div>
        <h3 className='text-center font-[500] text-[22px]'>{title}</h3>
        <div className='flex justify-around'>
          <span className='text-gray text-[16px] line-through'>$900</span>
          <span className='block text-[18px] text-black font-bold'>${price}</span>
          <span className='text-orange text-[16px] '>( sale $15%)</span>
        </div>
        {/* hover eye and add */}
        <div className=' absolute top-0 right-0 translate-x-[30px]  group-hover:translate-x-[0px] group-hover:opacity-100 opacity-0  transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
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
