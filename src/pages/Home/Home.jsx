import React, { useState } from 'react'
import './home.css'
import MainSwiper from '../../components/MainSwiper/MainSwiper'
import Center from '../../components/Containering/Center'
import Bolimlar from '../../components/Bolimlar/Bolimlar'
import Tasodifiy from '../../components/Tasodifiy/Tasodifiy'
import HomeBolimData from '../../data/home'
function Home() {

	return (
		<React.Fragment>

			<Center color='#2E293F' >

				<div className='home-wrap' style={{paddingTop:60}}>
					<h1 className='home-h1'>Premyera</h1>
				</div>
				<MainSwiper />
			</Center>
			<Center color='#161D25'>
				<div className='home-seperator'>
					<div className='home-right-wrapper'>
						{
							HomeBolimData.map((item,index)=>(
								<Bolimlar key={index} moviedata={item} />
							))
						}
					</div>
					<div className='home-left-wrapper'>
						<Tasodifiy />
					</div>
				</div>
			</Center>
		</React.Fragment>

	)
}

export default Home
