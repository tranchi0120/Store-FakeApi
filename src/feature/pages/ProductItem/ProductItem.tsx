import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../utils/FormatPrice'
import { useAppDispatch } from '../../../hooks/hook'
import { addToCart } from '../../../redux/slice/CartSlice'
import { IProduct } from '../../../types/interfaces'

interface IProps {
  id: number
  product: IProduct
}

const ProductItem = ({ id, product }: IProps): JSX.Element => {
  const dispatch = useAppDispatch()

  let discountedPrice = product.price - product.price * (product.discountPercentage / 100)

  const handleAddtoCart = (product: IProduct) => {
    console.log({ product })
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  return (
    <>
      <div className='relative flex flex-col gap-3 bg-white rounded-[8px]  shadow-3xl pb-3 group '>
        <div className='pr-[15px] h-[30px] bg-red-bold text-white absolute -left-1 top-3 flex items-center pl-3 z-30'>
          {product.category}
        </div>
        <div className='h-[250px] overflow-hidden duration-300 rounded-t-[8px]'>
          <img src={product.thumbnail} alt='image' className='w-full object-cover h-full hover:scale-[1.2] ' />
        </div>
        <div className='flex gap-2 items-center justify-center mt-4'>
          <span>brand:</span>
          <h3 className='text-[18x] font-[500] block'>{product.brand}</h3>
        </div>
        <h3 className='text-center font-[500] text-[22px]'>{product.title}</h3>
        <div className='flex justify-around'>
          <span className='text-gray text-[16px] line-through'>{formatPrice(product.price)}</span>
          <span className='block text-[18px] text-black font-bold'>
            {discountedPrice ? formatPrice(discountedPrice) : ''}
          </span>
          <span className='text-red-bold text-[16px] '>(sale {product.discountPercentage}%)</span>
        </div>
        {/* hover eye and add */}
        <div
          className=' absolute top-0 right-0 
        translate-x-[30px]  group-hover:translate-x-[0px] 
        group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-300'
        >
          <button>
            <div
              className='flex justify-center items-center text-white w-12 h-12 bg-red-bold'
              onClick={() => handleAddtoCart(product)}
            >
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
