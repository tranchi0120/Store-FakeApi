import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getSingleProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import Loader from '../../../components/Loader/Loader'

const ProductDetail = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { singleProduct, isLoading } = useAppSelector(selectorProducts)

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(parseFloat(id)))
    }
  }, [id, dispatch])

  if (isLoading) {
    return <Loader className='flex items-center justify-center h-[800px]' />
  }

  const images = singleProduct?.images.slice(1)

  return (
    <div className='container'>
      <div className='flex bg-white rou-[10px] my-9 p-8 gap-8 '>
        <div className='left'>
          <div className='h-[600px] w-full border border-orange '>
            <img className='w-full h-full object-contain' src={singleProduct?.images[0]} alt='#!' />
          </div>
          <div className='flex gap-4 mt-5 w-[800px]'>
            {images?.map((item, index) => (
              <div className='w-[200px] h-[150px] border '>
                <img key={index} className='w-full object-cover h-full' src={item} alt='#!' />
              </div>
            ))}
          </div>
        </div>
        <div className='right w-full'>
          <h3 className='text-[32px] font-[500] border-b-[1px] border-gray text-black'>{singleProduct?.title}</h3>
          <p className='text-gray text-[18px] font-thin mt-2'>{singleProduct?.description}</p>
          <div>
            <div className='flex gap-9 mt-5'>
              <p className='text-orange'>
                Rating: <span className='text-black ml-[2px]'>{singleProduct?.rating}</span>
              </p>
              <p className='text-orange px-5 border-x-[2px]'>
                Brand: <span className='text-black ml-[2px]'>{singleProduct?.brand}</span>
              </p>
              <p className='text-orange'>
                Category: <span className='text-black ml-[2px]'>{singleProduct?.category}</span>
              </p>
            </div>
          </div>
          <div className='bg-bgr p-6 flex flex-col gap-3 items-start mt-5'>
            <div>
              <span className='text-gray text-[18px] line-through'>$900</span>
              <span className=' ml-8'>All taxes are included</span>
            </div>
            <div className='flex gap-6 items-center'>
              <span className='block text-[30px] text-orange font-[500]'>${singleProduct?.price}</span>
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
