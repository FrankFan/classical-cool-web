import React from "react";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.less";
import banner1 from "@/assets/img/banner1.png";
import banner2 from "@/assets/img/banner1.jpg";
import banner3 from "@/assets/img/banner2.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
import Mint from "../Mint";
interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <div className="banner">
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://arseed.web3infra.dev/w8JKZX99SX8clktRcOKCAyFOLjn9xcWtqvhQZYvgY8s"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://arseed.web3infra.dev/Tif-2ZPQtMwm2GL1kLlf90NHq0DqPLAJO7k22UBtAso"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://arseed.web3infra.dev/QOf1TQJ1OXnVpoWD9BwAQcfpzwpN4EveIPH3ujrJwGA"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <a
            data-title="书房展"
            href="/show/258010.html"
            target="_blank"
            // style="background:url(/Uploads/Picture/2022/08/29/s630c6830d3285.jpg) no-repeat center;background-size:auto 100%;/*cursor:pointer;*/"
          >
            <img
              src="https://arseed.web3infra.dev/CLoMVmYZcfmb9xSAitjyvfnWqdtZLQSqUbAp5LRcwiE"
              alt=""
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
