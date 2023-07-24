import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../utils/FormatPrice'
import { useAppDispatch } from '../../../hooks/hook'
import { addToCart } from '../../../redux/slice/CartSlice'
import { IProduct } from '../../../types/interfaces'
import notification from '../../../notification/notification'

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
    notification.success('successfully added product')
  }

  return (
    <>
      <div className='relative flex flex-col gap-3 bg-white pb-5  group'>
        <div className='h-[320px]  overflow-hidden duration-300 '>
          <img
            src={product.thumbnail}
            alt='image'
            className='w-full object-cover h-full hover:scale-[1.2] rounded-[10px] '
          />
        </div>
        <div className='flex justify-between px-3 pt-2 gap-3'>
          <div className='flex flex-col gap-2'>
            <h3 className='  font-[500] text-[16px]'>{product.title}</h3>
            <span className='text-black text-[14px] '>(sale {product.discountPercentage}%)</span>
          </div>
          <div className='flex justify-around flex-col gap-2 '>
            <span className='block text-[16px] text-black font-bold'>
              {discountedPrice ? formatPrice(discountedPrice) : ''}
            </span>
            <span className='text-gray text-[16px] line-through'>{formatPrice(product.price)}</span>
          </div>
        </div>
        {/* hover eye and add */}
        <div
          className=' absolute top-0 right-0 
        translate-x-[30px]  group-hover:translate-x-[0px] 
        group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-300'
        >
          <button>
            <div
              className='flex justify-center items-center text-white w-12 h-12 bg-black'
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
