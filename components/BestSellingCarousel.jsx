'use client';
import Flower from './Flower';

// Swiper react comps.
import {Swiper, SwiperSlide} from 'swiper/react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Required module
import { Pagination } from 'swiper/modules';


const BestSellingCarousel = ({ flowers }) => {
  return <Swiper>
    {flowers.map(flower => {
      // console.log(flower);
      return <SwiperSlide key={flower._id}>
        <Flower flower={flower} />
      </SwiperSlide>;
    })}
  </Swiper>;
}

export default BestSellingCarousel;