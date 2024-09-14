"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SwiperPhoto.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import {
  BlanketPhoto,
  CactusPhoto,
  DogPhoto,
  FlowerPhotography,
  PhotographyWindows,
  PropertyHouse,
  HousePhoto,
  HousePhoto2,
} from "@/img/imgSwiperPhoto/index";

const SwiperPhoto: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className="mySwiper2-slide">
          <Image src={PropertyHouse} alt="Property House" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={DogPhoto} alt="Dog Photo" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={BlanketPhoto} alt="Blanket Photo" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={HousePhoto} alt="House Photo" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={PhotographyWindows} alt="Photography Windows" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={CactusPhoto} alt="Cactus Photos" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={FlowerPhotography} alt="Flower Photography" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper2-slide">
          <Image src={HousePhoto2} alt="House Photo" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="mySwiper-slide-none"></SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={DogPhoto} alt="Dog Photo" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={BlanketPhoto} alt="Blanket Photo" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={HousePhoto} alt="House Photo" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={PhotographyWindows} alt="Photography Windows" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={CactusPhoto} alt="Cactus Photos" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={FlowerPhotography} alt="Flower Photography" />
        </SwiperSlide>
        <SwiperSlide className="mySwiper-slide">
          <Image src={HousePhoto2} alt="House Photo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPhoto;
