import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { clearCart, selectCarts } from '../../../redux/slice/CartSlice'

import { formatPrice } from '../../../utils/FormatPrice'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material'
import { AiFillDelete } from 'react-icons/ai'
import CartItem from './CartItem'

export const CustomSlider = styled(AiFillDelete)({
  width: '20px',
  height: '20px',
  color: 'black',
  cursor: 'pointer'
})

const Cart = () => {
  const dispatch = useAppDispatch()
  const carts = useAppSelector(selectCarts)
  const cartAll = carts.carts

  const totalMoney = cartAll.reduce((cur, acc) => {
    return cur + (acc?.price - acc?.price * (acc.discountPercentage / 100)) * acc.quantity
  }, 0)

  return (
    <div className='mt-8 fontFamily'>
      <div className='container'>
        <div className='flex justify-between items-center  p-3 shadow-3xl border-none mb-4 rounded-[5px]'>
          <h2 className='font-bold text-[30px]'>Cart</h2>
          <div onClick={() => dispatch(clearCart())}>
            <CustomSlider />
          </div>
        </div>

        <div className=' flex justify-between items-center  p-3 border-b-[1px] border-black mb-4 '>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' className=' checked:bg-black w-4 h-4 rounded-[5px] text-black' />
            <span className=' font-[500] text-gray '>PRODUCT ({cartAll.length})</span>
          </div>
          <span className=' font-[500] text-gray '>QUANTITY</span>
          <span className=' font-[500] text-gray '>PRICE</span>
        </div>
        {cartAll.length > 0 && <CartItem cartAll={cartAll} />}



        {/* cart null */}
        {cartAll.length === 0 && (
          <div className='flex flex-col gap-9 items-center justify-center h-[500px] bg-white rounded-[8px] border-none my-5'>
            <span className='text-[22px]'> Your shopping cart is empty.</span>
            <Link to='/' className='shopping-btn bg-orange text-white fw-5 bg-black px-[15px] py-[10px]'>
              Go shopping Now
            </Link>
          </div>
        )}

        {/* total CartItem */}
        <div className='flex justify-end px-8 py-6 rounded-lg bg-white text-black text-[20px] mt-5'>
          <div className='flex justify-between w-full'>
            <div className='items-center flex gap-3'>
              ToTal Price: <p className='text-black text-[22px] ml-4'>{formatPrice(totalMoney)}</p>
            </div>
            <button className=' bg-black text-white px-10 py-3 rounded-[4px]'>Checkout</button>
          </div>
        </div>

        <div className='flex justify-end px-8 py-6 rounded-lg  mt-5'></div>
      </div>
    </div>

  )
}

export default Cart
