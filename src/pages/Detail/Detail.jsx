import React, { useEffect } from 'react'
import './detail.css'
import { useLocation } from 'react-router-dom'
import Center from '../../components/Containering/Center';
import LabTabs from '../../components/Tabing/Tabing';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Tasodifiy from '../../components/Tasodifiy/Tasodifiy';

function Detail() {
	const location = useLocation();
	console.log(location.state)

	useEffect(() => {
	  window.scrollTo({
		top:0,
		behavior:"auto"
	  })
	}, [])
	
	return (
		<Center color='#161D25'>
			<div className='det-big-container'>
				<div className='main-box-wr'>
					<h1 className='name-of-film'>DAXSHATLI UY 2 </h1>
					<div className='main-box' >
						<div className='left-detail'>
							<img className='movie-img' src={location.state?.img} alt="" />
						</div>
						<div className="right-detail">
							<div className='rightmaindetailbox'>
								<button className='right-detailsbt'>NOMI</button>
								<div className='rightdetailbox'>
									{location.state.title}
								</div>
							</div>
							<div className='rightmaindetailbox'>
								<button className='right-detailsbt'>DAVLATI</button>
								<div className='rightdetailbox'>
									Janubiy koreya
								</div>
							</div>
							<div className='rightmaindetailbox'>
								<button className='right-detailsbt'>SANASI</button>
								<div className='rightdetailbox'>
									2023
								</div>
							</div>
							<div className='rightmaindetailbox'>
								<button className='right-detailsbt'>JANR</button>
								<div className='rightdetailbox'>
									Tarjima kinolar / Jangari / Fantastika / Qo'rqinchili / Serial
								</div>
							</div>
							<div className='rightmaindetailbox'>
								<button className='right-detailsbt'>TILI</button>
								<div className='rightdetailbox'>
									O'zbek tilida (Tarjima)
								</div>
							</div>
							<div className='rightmaindetailbox'>
								<button className='right-detailsbt'>DAVOMIYLIGI</button>
								<div className='rightdetailbox'>
									1 soat
								</div>

							</div>
							<div className='marksbox'>
								<div className='marks marks-red'>
									<ThumbUpOffAltIcon style={{ color: "#2ECC71" }} />
								</div>
								<div className='marks'>+229</div>
								<div className='marks marks-green'>
									<ThumbDownOffAltIcon style={{ color: "red" }} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="det-tasodif">
					<Tasodifiy />
				</div>
			</div>
            <LabTabs video_link={location.state.video_link}/>
			<div>
            </div>
			<div className='coment-name'>
				<input className='input' type="" placeholder='Fikr bildirish...' />
			</div>
			<div className='coment-container'></div>
		</Center>
	)
}

export default Detail