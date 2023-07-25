import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules'

const Hero = () => {
  const images = [
    {
      id: 1,
      link: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80'
    },
    {
      id: 2,
      link: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
    },
    {
      id: 3,
      link: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      link: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ]

  return (
    <Swiper
      effect={'creative'}
      slidesPerView={'auto'}
      centeredSlides={true}
      navigation
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
      }}
      modules={[Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar]}
    >
      <div className='hero '>
        {images.map((item) => (
          <SwiperSlide className='!m-0 max-h-[500px]' key={item.id}>
            <img src={item.link} alt='#!' className='w-full h-[500px] object-cover' />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}

export default Hero
