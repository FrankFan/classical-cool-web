import React from 'react';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.less';
import banner1 from '@/assets/img/banner1.png';
import { Autoplay, Pagination, Navigation } from 'swiper';
interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a
            data-title="书房展"
            href="/show/258010.html"
            target="_blank"
            // style="background:url(/Uploads/Picture/2022/08/29/s630c6830d3285.jpg) no-repeat center;background-size:auto 100%;/*cursor:pointer;*/"
          >
            <img
              src="https://img.dpm.org.cn/Uploads/Picture/2022/08/29/s630c6830d3285.jpg"
              alt=""
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
