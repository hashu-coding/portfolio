"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { sliderData } from "@/Data/data";

function Slider() {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        {sliderData?.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center">
              <div className="w-full h-auto md:h-[90vh] p-2 md:p-0 flex justify-center items-center bg-zinc-600">
                <img src={item.img} className="h-full md:w-full" alt="#" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slider;
