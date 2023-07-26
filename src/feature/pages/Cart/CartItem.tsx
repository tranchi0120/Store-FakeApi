import { AiOutlineMinus } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { useAppDispatch } from '../../../hooks/hook'
import { addToCart, decreaseCart, removeCart } from '../../../redux/slice/CartSlice'
import { IProduct } from '../../../types/interfaces'
import { formatPrice } from '../../../utils/FormatPrice'
import { CustomSlider } from '../../pages/Cart/Cart'
import { Link } from 'react-router-dom'

interface Props {
  cartAll: IProduct[]
  handleItemCheck: (itemId: number) => void
  selectedItems: number[]
}

const CartItem = ({ cartAll, handleItemCheck, selectedItems }: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const handleRemoveCart = (id: number) => {
    dispatch(removeCart(id))
  }

  return (
    <div className=' '>
      {cartAll.length > 0 &&
        cartAll.map((item) => (
          <div className='p-3 text-black mt-5 grid gap-4 grid-cols-4  justify-center items-center max-[700px]:grid-cols-1 border-gray border-b-2' key={item.id}>
            <div className='flex items-center gap-7 col-span-2 max-[680px]:col-span-1 max-[680px]:items-center'>
              <input
                type='checkbox'
                className='checked:bg-black w-4 h-4 rounded-[5px] text-black'
                onChange={() => handleItemCheck(item.id)}
                checked={selectedItems.includes(item.id)}
              />
              <div className='flex gap-4 items-center justify-center w-full'>
                <div className='max-w-[200px] max-[768px]:w-[200px]  h-[200px] object-cover '>
                  <img src={item.thumbnail} alt='#!' className='w-full  h-full  object-cover  rounded-[8px]' />
                </div>
                <div className='flex flex-col gap-2 w-[200px]'>
                  <Link to={`/product/${item.id}`} className='text-[18px] font-bold max-[768px]:w-[100px] max-[680px]:w-full'>
                    {item.title}
                  </Link>
                  <span className='text-gray text-[18px] line-through'>
                    {formatPrice(item?.price - item?.price * (item.discountPercentage / 100))}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='max-[680px]:justify-end  px-2 outline-none flex items-center justify-start border w-[120px] h-[40px] rounded-[5px] border-black  '>
                <span className='p-1 cursor-pointer h text-black' onClick={() => dispatch(decreaseCart(item))}>
                  <AiOutlineMinus size='22px' />
                </span>
                <p className='w-[50px] text-center pointer-events-none'>{item.quantity}</p>
                <span
                  className='px-1 cursor-pointer p-1 text-black'
                  onClick={() => dispatch(addToCart({ ...item, quantity: +1 }))}
                >
                  <IoMdAdd size='22px' />
                </span>
              </div>
            </div>
            <div className='flex items-center gap-6  justify-end'>
              <span className='text-black font-bold text-[22px] ml-4'>
                {formatPrice((item?.price - item?.price * (item.discountPercentage / 100)) * item.quantity)}
              </span>
              <div className='flex justify-end' onClick={() => handleRemoveCart(item.id)}>
                <CustomSlider />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CartItem
