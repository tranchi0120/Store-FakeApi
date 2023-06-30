import { Checkbox, styled } from '@mui/material'
import { AiOutlineDelete, AiOutlineMinus } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { useAppDispatch } from '../../../hooks/hook'
import { addToCart, decreaseCart, removeCart } from '../../../redux/slice/CartSlice'
import { IProduct } from '../../../types/interfaces'
import { formatPrice } from '../../../utils/FormatPrice'
import { useState } from 'react'

interface Props {
  cartAll: IProduct[]
}

const CartModal = ({ cartAll }: Props) => {
  /*----- CUSTOM STYLES ------*/
  const CustomSlider = styled(AiOutlineDelete)({
    width: '30px',
    height: '30px',
    color: 'black',
    '&:hover': {
      color: 'red'
    },
    cursor: 'pointer'
  })

  const dispatch = useAppDispatch()

  const handleRemoveCart = (id: number) => {
    dispatch(removeCart(id))
  }

  return (
    <div>
      {cartAll.length > 0 &&
        cartAll.map((item) => (
          <div>
            {/* cartItem */}
            <div className='px-8 py-6 rounded-lg bg-white text-black mt-5 grid grid-cols-2' key={item.id}>
              <div className='flex items-center gap-7'>
                <Checkbox style={{ color: 'red' }} />
                <div className=' w-[150px] h-[150px]'>
                  <img src={item.thumbnail} alt='#!' className=' w-full object-cover h-full' />
                </div>
                <span className=' block text-[18px] font-[500] w-[315px]'>{item.description}</span>
              </div>
              <div className=' justify-center items-center w-full grid grid-cols-4'>
                <div className=''>
                  <span className='text-gray text-[16px] line-through'>${item.price}</span>
                  <span className='text-red-bold text-[22px] ml-4'>
                    {formatPrice(item?.price - item?.price * (item.discountPercentage / 100))}
                  </span>
                </div>
                <div className='flex items-center w-[100px]  justify-center mx-[24px] border border-red-bold'>
                  <span
                    className='p-1 cursor-pointer hover:bg-red-bold hover:text-white text-red-bold '
                    onClick={() => dispatch(decreaseCart(item))}
                  >
                    <AiOutlineMinus size='22px' />
                  </span>
                  <p className=' w-[50px] text-center '>{item.quantity}</p>
                  <span
                    className='  px-1 cursor-pointer p-1 hover:bg-red-bold hover:text-white text-red-bold'
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <IoMdAdd size='22px' />
                  </span>
                </div>

                <div className='flex justify-end'>
                  <span className='text-red-bold text-[22px] ml-4'>
                    {formatPrice((item?.price - item?.price * (item.discountPercentage / 100)) * item.quantity)}
                  </span>
                </div>

                <div className='hover:text-red-bold flex justify-end' onClick={() => handleRemoveCart(item.id)}>
                  <CustomSlider />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CartModal
