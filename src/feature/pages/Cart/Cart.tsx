import { Checkbox, styled } from '@mui/material'
import { AiOutlineDelete, AiOutlineMinus } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { addToCart, clearCart, decreaseCart, removeCart, selectCarts } from '../../../redux/slice/CartSlice'
import { formatPrice } from '../../../utils/FormatPrice'

const CustomSlider = styled(AiOutlineDelete)({
  width: '30px',
  height: '30px',
  color: 'black',
  '&:hover': {
    color: 'red'
  },
  cursor: 'pointer'
})

const Cart = () => {
  const dispatch = useAppDispatch()

  const carts = useAppSelector(selectCarts)
  const cartAll = carts.carts

  const totalMoney = cartAll.reduce((cur, acc) => {
    console.log('totoPrice', acc.totalPrice)
    return cur + acc.totalPrice
  }, 0)
  console.log({ totalMoney })

  const handleRemoveCart = (id: number) => {
    console.log(typeof id)
    dispatch(removeCart(id))
  }

  return (
    <div className='container mt-8'>
      <div className='flex justify-between px-8 py-6 rounded-lg bg-white text-black text-[20px]'>
        <div className='flex items-center'>
          <Checkbox id='allproduct' style={{ color: 'red' }} />
          <label htmlFor='allproduct' className=' cursor-pointer'>
            Product
          </label>
        </div>
        <div className='flex gap-[120px]' onClick={() => dispatch(clearCart())}>
          <CustomSlider />
        </div>
      </div>
      {/* cartItem */}
      {cartAll.length > 0 &&
        cartAll.map((item) => (
          <div className='px-8 py-6 rounded-lg bg-white text-black mt-5 flex justify-between' key={item.id}>
            <div className='flex items-center gap-7'>
              <Checkbox style={{ color: 'red' }} />
              <div className=' w-[150px] h-[150px]'>
                <img src={item.thumbnail} alt='#!' className=' w-full object-cover h-full' />
              </div>
              <span className=' block text-[18px] font-[500] w-[315px]'>{item.description}</span>
            </div>
            <div className='flex justify-between items-center w-[600px]'>
              <div className=' ml-6'>
                <span className='text-gray text-[16px] line-through'>${item.price}</span>
                <span className='text-red-bold text-[22px] ml-4'>
                  {formatPrice(item?.price - item?.price * (item.discountPercentage / 100))}
                </span>
              </div>
              <div className='flex border border-red-bold'>
                <span
                  className=' border border-red-bold p-1 cursor-pointer hover:bg-red-bold hover:text-white text-red-bold'
                  onClick={() => dispatch(decreaseCart(item))}
                >
                  <AiOutlineMinus size='22px' />
                </span>
                <input
                  type='text'
                  className='border border-red-bold max-w-[60px] outline-none text-center p-1'
                  value={item.quantity}
                  onChange={() => dispatch(addToCart(item))}
                />
                <span
                  className=' border border-red-bold px-1 cursor-pointer p-1 hover:bg-red-bold hover:text-white text-red-bold'
                  onClick={() => dispatch(addToCart(item))}
                >
                  <IoMdAdd size='22px' />
                </span>
              </div>

              <div>
                <span className='text-red-bold text-[22px] ml-4'>
                  {formatPrice((item?.price - item?.price * (item.discountPercentage / 100)) * item.quantity)}
                </span>
              </div>

              <div className='hover:text-red-bold' onClick={() => handleRemoveCart(item.id)}>
                <CustomSlider />
              </div>
            </div>
          </div>
        ))}

      {/* total CartItem */}
      <div className='flex justify-end px-8 py-6 rounded-lg bg-white text-black text-[20px] mt-5'>
        <div className='flex gap-[5px] justify-center items-center'>
          <span>Total:</span>
          <span className='text-red-bold'>({cartAll.length}: product)</span>
          <span className='text-red-bold text-[22px] ml-4'>{formatPrice(totalMoney)}</span>
        </div>
      </div>
    </div>
  )
}

export default Cart
