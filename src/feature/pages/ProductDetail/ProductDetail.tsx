import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getSingleProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import Loader from '../../../components/Loader/Loader'
import { formatPrice } from '../../../utils/FormatPrice'
import { IProduct } from '../../../types/interfaces'
import { addToCart } from '../../../redux/slice/CartSlice'
import notification from '../../../notification/notification'

const ProductDetail = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { singleProduct, isLoading } = useAppSelector(selectorProducts)

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(parseFloat(id)))
    }
  }, [])

  const [quantity, setQuantity] = useState<number>(1)

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1
      if (singleProduct && tempQty > singleProduct?.stock) tempQty = singleProduct?.stock
      return tempQty
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1
      if (tempQty < 1) tempQty = 1
      return tempQty
    })
  }

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart({ ...product, quantity: quantity }))
    notification.success('more successful products')
  }

  if (isLoading) {
    return <Loader />
  }
  const images = singleProduct?.images.slice(1)

  // ----------------

  return (
    <div className='container'>
      {!isLoading && (
        <div className='flex bg-white rou-[10px] my-9 p-8 gap-8 '>
          <div className='left'>
            <div className='h-[600px] w-full border border-red-bold '>
              <img className='w-full h-full object-cover' src={singleProduct?.thumbnail} alt='#!' />
            </div>
            <div className='flex gap-4 mt-5 w-[800px]'>
              {images?.map((item, index) => (
                <div className='w-[200px] h-[150px] border duration-300 overflow-hidden' key={index}>
                  <img key={index} className='w-full object-cover h-full hover:scale-[1.2] ' src={item} alt='#!' />
                </div>
              ))}
            </div>
          </div>
          <div className='right w-full'>
            <h3 className='text-[32px] font-[500] border-b-[1px] border-gray text-black'>{singleProduct?.title}</h3>
            <p className='text-gray text-[18px] font-thin mt-2'>{singleProduct?.description}</p>
            <div>
              <div className='flex gap-9 mt-5'>
                <p className='text-red-bold'>
                  Rating: <span className='text-black ml-[2px]'>{singleProduct?.rating}</span>
                </p>
                <p className='text-red-bold px-5 border-x-[2px]'>
                  Brand: <span className='text-black ml-[2px]'>{singleProduct?.brand}</span>
                </p>
                <p className='text-red-bold'>
                  Category: <span className='text-black ml-[2px]'>{singleProduct?.category}</span>
                </p>
              </div>
            </div>
            <div className='bg-bgr p-6 flex flex-col gap-3 items-start mt-5'>
              <div>
                <span className='text-gray text-[18px] line-through'>
                  {singleProduct && formatPrice(singleProduct?.price)}
                </span>
                <span className=' ml-8'>All taxes are included</span>
              </div>
              <div className='flex gap-6 items-center'>
                <span className='block text-[30px] text-red-bold font-[500]'>
                  {singleProduct &&
                    formatPrice(
                      singleProduct?.price - singleProduct?.price * (singleProduct?.discountPercentage / 100)
                    )}
                </span>
                <span className='text-white bg-red-bold text-[16px] px-1 font-[400] '>
                  sale {singleProduct?.discountPercentage}%
                </span>
              </div>
            </div>
            <div className='flex gap-5 mt-5'>
              <span className='text-black text-[18px]'>Quantity:</span>
              <div className='flex items-center w-[100px]  justify-center mx-[24px] border border-red-bold'>
                <span
                  className='p-1 cursor-pointer hover:bg-red-bold hover:text-white text-red-bold '
                  onClick={decreaseQty}
                >
                  <AiOutlineMinus size='22px' />
                </span>
                <p className=' w-[50px] text-center '>{quantity}</p>
                <span
                  className='  px-1 cursor-pointer p-1 hover:bg-red-bold hover:text-white text-red-bold'
                  onClick={increaseQty}
                >
                  <IoMdAdd size='22px' />
                </span>
              </div>
            </div>
            <div className='mt-9 flex gap-6'>
              <div
                className='flex gap-5 bg-red-bold border-bgr-cart border-[2px] text-white w-[280px] p-4 cursor-pointer group hover:bg-bgr-cart'
                onClick={() => singleProduct && handleAddProduct({ ...singleProduct, quantity })}
              >
                <AiOutlineShoppingCart size='28px' />
                <span className='text-[18px]'>Add To Cart</span>
              </div>
              <button className='bg-bgr-cart hover:bg-red-600 text-white px-3'>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
