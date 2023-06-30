import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { clearCart, selectCarts } from '../../../redux/slice/CartSlice'

import { formatPrice } from '../../../utils/FormatPrice'
import { Link } from 'react-router-dom'
import CartModal from '../../components/CartModal/CartModal'
import { Checkbox, styled } from '@mui/material'
import { AiOutlineDelete } from 'react-icons/ai'

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
    return cur + (acc?.price - acc?.price * (acc.discountPercentage / 100)) * acc.quantity
  }, 0)

  return (
    <div className='container mt-8'>
      {/* Header Cart */}
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
      {cartAll.length === 0 && (
        <div className='flex flex-col gap-9 items-center justify-center h-[500px] bg-white rounded-[8px] border-none my-5'>
          <span className='text-[22px]'> Your shopping cart is empty.</span>
          <Link to='/' className='shopping-btn bg-orange text-white fw-5 bg-red-bold px-[15px] py-[10px]'>
            Go shopping Now
          </Link>
        </div>
      )}

      {cartAll.length > 0 && <CartModal cartAll={cartAll} />}

      {/* total CartItem */}
      <div className='flex justify-end px-8 py-6 rounded-lg bg-white text-black text-[20px] mt-5'>
        <div className='flex justify-between w-full  items-center'>
          <p className='text-red-bold'>Total: {cartAll.length}</p>
          <p className='text-red-bold text-[22px] ml-4'>{formatPrice(totalMoney)}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart
