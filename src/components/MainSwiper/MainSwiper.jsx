import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './mainswiper.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Main_Swiper from '../../data/mainswiper';

export default function MainSwiper() {
  return (
    <>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mymainswiper">
        {
          Main_Swiper.map((item, index) => (
            <SwiperSlide className='box mains_swiper'>
              <img className='main-img' src={item.img} alt="" />
              <h1>{item.title}</h1>
            </SwiperSlide>



          ))
        }


      </Swiper>
    </>
  );
}