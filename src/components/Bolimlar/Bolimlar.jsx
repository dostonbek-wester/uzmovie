import React from 'react'
import Card from '../Card/Card'
import './bolimlar.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
function Bolimlar({moviedata}) {
  return (
	<div>
		<div style={{marginTop:150}}>
			<h1 className='bolim_h1'>{moviedata.title}</h1>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				pagination={{
				clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper movie-card-container"
			>
				{
					moviedata.movies.map((item,index)=>(
						<SwiperSlide>
							<Card key={index} item={item} />

						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	</div>
  )
}

export default Bolimlar





