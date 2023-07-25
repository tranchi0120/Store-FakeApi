import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { AiOutlineMinus, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import { getSingleProduct, selectorProducts } from '../../../redux/slice/ProductSlice'
import Loader from '../../../components/Loader/Loader'
import { formatPrice } from '../../../utils/FormatPrice'
import { IProduct } from '../../../types/interfaces'
import { addToCart } from '../../../redux/slice/CartSlice'
import notification from '../../../notification/notification'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Breadcrumbs, Rating } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './styles.css'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const ProductDetail = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const location = useLocation()

  const { singleProduct, isLoading } = useAppSelector(selectorProducts)
  const [quantity, setQuantity] = useState<number>(1)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>()

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(parseFloat(id)))
    }
  }, [])

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
      if (tempQty < 1) {
        notification.warning('minimum product is 1')
        tempQty = 1
      }
      return tempQty
    })
  }

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart({ ...product, quantity: quantity }))
    notification.success('successfully added product')
  }

  if (isLoading) {
    return <Loader />
  }

  const allImages = singleProduct?.images.concat(singleProduct?.thumbnail)
  console.log(allImages)

  const previousLink = location.state?.previousLink || '/'

  return (
    <div className='container'>
      <div className='mt-5'>
        <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
          <Link to={previousLink} color='inherit'>
            {previousLink === '/' ? 'Home' : previousLink}
          </Link>
          <span className=' pointer-events-none text-black'>{singleProduct?.title}</span>
        </Breadcrumbs>
      </div>
      {!isLoading && (
        <div className='grid grid-cols-2 bg-white rou-[10px] my-2 p-8 gap-8 '>
          {/*  */}
          <div className='left'>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className='mySwiper2'
              loop={true}
            >
              {singleProduct?.images?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='xl:h-[600px] w-full rounded-[15px]  border-none shadow-3xl max-[600px]:h-[400px] '
                >
                  <img
                    key={index}
                    className='w-full h-full object-cover border-none rounded-[15px]'
                    src={item}
                    alt='#!'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className='mySwiper mt-5'
            >
              {singleProduct?.images?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='w-[200px] h-[200px]  rounded-[8px] duration-300 overflow-hidden max-[590px]:h-[100px]'
                >
                  <img
                    key={index}
                    className='w-full object-cover  shadow-xl  h-full rounded-[8px] cursor-pointer'
                    src={item}
                    alt='#!'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/*  */}
          <div className='right w-full '>
            <h3 className='text-[28px] font-bold text-black'>{singleProduct?.title}</h3>
            <div className='flex items-center gap-1 mt-2'>
              <Rating name='read-only' size='small' readOnly value={singleProduct?.rating} />
              <span className='text-black ml-[2px]'>({singleProduct?.rating})</span>
            </div>
            <div className='mt-5 flex items-center gap-3'>
              <h2 className='block text-[30px] text-black font-bold'>
                {singleProduct &&
                  formatPrice(singleProduct?.price - singleProduct?.price * (singleProduct?.discountPercentage / 100))}
              </h2>
              <span className='text-gray text-[18px] line-through'>
                {singleProduct && formatPrice(singleProduct?.price)}
              </span>
            </div>
            <div>
              <div className='flex gap-9 mt-5 justify-start '>
                <p className='text-black max-[590px]:px-0 max-[590px]:border-none'>
                  Brand: <span className='text-black ml-[2px] font-bold '>{singleProduct?.brand}</span>
                </p>
                <p className='text-black'>
                  Category: <span className='text-black ml-[2px] font-bold'>{singleProduct?.category}</span>
                </p>
              </div>
            </div>

            <div className='px-2 outline-none mt-9 flex items-center justify-start border w-[120px] h-[40px] rounded-[5px] border-black'>
              <span className='p-1 cursor-pointer h text-black ' onClick={decreaseQty}>
                <AiOutlineMinus size='22px' />
              </span>
              <p className=' w-[50px] text-center pointer-events-none '>{quantity}</p>
              <span className='  px-1 cursor-pointer p-1  text-black' onClick={increaseQty}>
                <IoMdAdd size='22px' />
              </span>
            </div>
            <div className='mt-5 flex gap-6 max-[590px]:flex-wrap'>
              <div
                className='flex gap-5 bg-black  text-white w-[280px] p-4 cursor-pointer group rounded-[10px]'
                onClick={() => singleProduct && handleAddProduct({ ...singleProduct, quantity })}
              >
                <AiOutlineShoppingCart size='28px' />
                <span className='text-[18px]'>Add To Cart</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
