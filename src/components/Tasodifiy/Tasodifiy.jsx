import React from 'react'
import "./tasodifiy.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

function Tasodifiy() {
  return (
    <div className='Tasodifiy'>
      <div className='container-tasodifiy'>
        <h1 className='tasodifiy-h1'>Tasodifiy film</h1>
        <div className='container2'>
          <img className='tasodifiy-img' src="https://images.uzmovi.com/ii/1611377647/704012aa/33063316.jpg" alt="" /> </div>
        <div className='wwrap-p'><p>Qasos premyera</p></div>
       
      </div>
    </div>
  )
}

export default Tasodifiy