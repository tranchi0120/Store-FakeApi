import { AiOutlineMinus, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

const ProductDetail = () => {
  return (
    <div className='container'>
      <div className='flex bg-white rou-[10px] my-9 p-8 gap-8 '>
        <div className='left'>
          <div className='w-[800px] h-[600px]'>
            <img
              className='w-full h-full'
              src='https://images.unsplash.com/photo-1687684514463-42d853944099?ixlib=rb-4.0
              .3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
              alt='#!'
            />
          </div>
          <div className='flex gap-2 mt-5 w-[800px]'>
            <div className='w-[200px] h-[200px] '>
              <img
                className='w-full'
                src='https://images.unsplash.com/photo-1687684514463-42d853944099?ixlib=rb-4.0.3&i
                xid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
                alt='#!'
              />
            </div>
            <div className='w-[200px] h-[200px] '>
              <img
                className='w-full'
                src='https://images.unsplash.com/photo-1687684514463-42d853944099?ixlib=rb-4.0.3&i
                xid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
                alt='#!'
              />
            </div>
            <div className='w-[200px] h-[200px] '>
              <img
                className='w-full'
                src='https://images.unsplash.com/photo-1687684514463-42d853944099?ixlib=rb-4.0.3&i
                xid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
                alt='#!'
              />
            </div>
            <div className='w-[200px] h-[200px] '>
              <img
                className='w-full'
                src='https://images.unsplash.com/photo-1687684514463-42d853944099?ixlib=rb-4.0.3&i
                xid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
                alt='#!'
              />
            </div>
          </div>
        </div>
        <div className='right w-full'>
          <h3 className='text-[32px] font-[500] border-b-[1px] border-gray text-black'>iPhone 9</h3>
          <p className='text-gray text-[18px] font-thin mt-2'>An apple mobile which is nothing like apple</p>
          <div>
            <div className='flex gap-9 mt-5'>
              <p className='text-orange'>
                Rating: <span className='text-black ml-[2px]'>4.69 </span>
              </p>
              <p className='text-orange px-5 border-x-[2px]'>
                Brand: <span className='text-black ml-[2px]'>Apple</span>
              </p>
              <p className='text-orange'>
                Category: <span className='text-black ml-[2px]'>Category</span>
              </p>
            </div>
          </div>
          <div className='bg-bgr p-6 flex flex-col gap-3 items-start mt-5'>
            <div>
              <span className='text-gray text-[18px] line-through'>$900</span>
              <span className=' ml-8'>All taxes are included</span>
            </div>
            <div className='flex gap-6 items-center'>
              <span className='block text-[30px] text-orange font-[500]'>$1800</span>
              <span className='text-white bg-orange text-[16px] px-1 font-[400] '>sale $15%</span>
            </div>
          </div>
          <div className='flex gap-5 mt-7 items-center'>
            <span className='text-black text-[18px]'>Quantity:</span>
            <div className='flex items-center w-[120px] justify-between border cursor-pointer'>
              <span className='w-full border-r flex justify-center'>
                <AiOutlineMinus size='22px' />
              </span>
              <span className=' w-full text-center text-[18px]'>1</span>
              <span className='w-full border-l flex justify-center cursor-pointer'>
                <IoMdAdd size='22px' />
              </span>
            </div>
          </div>
          <div className='mt-9 flex gap-6'>
            <div className='flex gap-5 bg-orange border-bgr-cart border-[2px] text-white w-[280px] p-4 cursor-pointer group hover:bg-bgr-cart'>
              <button>
                <AiOutlineShoppingCart size='28px' />
              </button>
              <span className='text-[18px] '>Add To Cart</span>
            </div>
            <button className='bg-bgr-cart hover:bg-red-600 text-white px-3'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
