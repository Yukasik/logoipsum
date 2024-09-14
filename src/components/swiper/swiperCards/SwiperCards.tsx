"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./SwiperCards.css";
import { FreeMode, Pagination } from "swiper/modules";
import {
  HouseExample1,
  HouseExample2,
  HouseExample3,
  HouseExample4,
  HouseExample5,
  HouseExample6,
} from "@/img/imgCards";
import CardsCatalog from "@/components/cards/cardsCatalog/CardsCatalog";

const SwiperCards: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="my-swiper-cards"
      >
        <SwiperSlide className="my-swiper-card">
          <CardsCatalog
            image={HouseExample1}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </SwiperSlide>
        <SwiperSlide className="my-swiper-card">
          <CardsCatalog
            image={HouseExample2}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </SwiperSlide>
        <SwiperSlide className="my-swiper-card">
          <CardsCatalog
            image={HouseExample3}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </SwiperSlide>
        <SwiperSlide className="my-swiper-card">
          <CardsCatalog
            image={HouseExample4}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </SwiperSlide>
        <SwiperSlide className="my-swiper-card">
          <CardsCatalog
            image={HouseExample5}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </SwiperSlide>
        <SwiperSlide className="my-swiper-card">
          <CardsCatalog
            image={HouseExample6}
            title="Malto House"
            showers="4"
            places="2"
            size="2"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCards;
