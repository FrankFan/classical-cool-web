import React from 'react';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.less';
import banner1 from '@/assets/img/banner1.png';
import banner2 from '@/assets/img/banner2.jpeg';
import banner3 from '@/assets/img/banner3.jpeg';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Mint from '../Mint';
interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <div className='banner' id='top'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false
        // }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={banner1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
