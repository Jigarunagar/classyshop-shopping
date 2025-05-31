import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCartSlider from "../../components/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";

function Home() {
  return (
    <>
      <HomeSlider />
      <HomeCartSlider />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4 flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600]">Free Shipping</span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On your First Order abd over $200
              </p>
            </div>
            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>
        </div>
      </section>

      <br />
      <br />
    </>
  );
}

export default Home;
