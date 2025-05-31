import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function HomeCartSlider() {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1748409729550_fash.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-8 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png"
                  alt=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCartSlider;
