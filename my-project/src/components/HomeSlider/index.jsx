import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/eoss_main_web_strapi_f73db24c13/eoss_main_web_strapi_f73db24c13.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/private_brands_Main_Banners_Web_550450e028/private_brands_Main_Banners_Web_550450e028.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Footwear_Main_Banners_Web_41c8118b7f/Footwear_Main_Banners_Web_41c8118b7f.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/fragrance_Main_Banners_Web_f478190311/fragrance_Main_Banners_Web_f478190311.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Watches_Main_Banners_Web_f69de49e48/Watches_Main_Banners_Web_f69de49e48.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Women_Indian_Main_Banners_Web_a7e929fc4e/Women_Indian_Main_Banners_Web_a7e929fc4e.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/menswear_Main_Banners_Web_931690d6c3/menswear_Main_Banners_Web_931690d6c3.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://cmsimages.shoppersstop.com/Women_Western_Main_Banners_Web_ab2e41ff09/Women_Western_Main_Banners_Web_ab2e41ff09.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
