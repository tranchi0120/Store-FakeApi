import { Checkbox, styled } from '@mui/material'
import { AiOutlineDelete, AiOutlineMinus } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

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
  return (
    <div className='container mt-8'>
      <div className='flex justify-between px-8 py-6 rounded-lg bg-white text-black text-[20px]'>
        <div className='flex items-center'>
          <Checkbox id='allproduct' style={{ color: 'red' }} />
          <label htmlFor='allproduct' className=' cursor-pointer'>
            Product
          </label>
        </div>
        <div className='flex gap-[120px]'>
          <CustomSlider />
        </div>
      </div>
      <div className='px-8 py-6 rounded-lg bg-white text-black mt-5 flex justify-between'>
        <div className='flex items-center gap-7'>
          <Checkbox style={{ color: 'red' }} />
          <div className=' w-[150px] h-[150px]'>
            <img
              src='https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
              alt='#!'
              className=' w-full object-cover h-full'
            />
          </div>
          <span className=' block text-[18px] font-[500] w-[315px]'>An apple mobile which is nothing like apple</span>
        </div>
        <div className='flex justify-between items-center w-[600px]'>
          <div className=' ml-6'>
            <span className='text-gray text-[16px] line-through'>$200</span>
            <span className='text-red-bold text-[22px] ml-4'>$200</span>
          </div>
          <div className='flex border border-red-bold'>
            <span className=' border border-red-bold p-1 cursor-pointer hover:bg-red-bold hover:text-white text-red-bold'>
              <AiOutlineMinus size='22px' />
            </span>
            <input type='text' className='border border-red-bold max-w-[60px] outline-none text-center p-1' />
            <span className=' border border-red-bold px-1 cursor-pointer p-1 hover:bg-red-bold hover:text-white text-red-bold'>
              <IoMdAdd size='22px' />
            </span>
          </div>

          <div>
            <span className='text-red-bold text-[22px] ml-4'>$200</span>
          </div>

          <div className='hover:text-red-bold'>
            <CustomSlider />
          </div>
        </div>
      </div>

      <div className='flex justify-end px-8 py-6 rounded-lg bg-white text-black text-[20px] mt-5'>
        <div className='flex gap-[5px] justify-center items-center'>
          <span>Total:</span>
          <span>(0: Item)</span>
          <span className='text-red-bold text-[22px] ml-4'>$200</span>
        </div>
      </div>
    </div>
  )
}

export default Cart
