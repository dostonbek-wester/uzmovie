import React from 'react'
import './center.css'

function Center(props) {
	console.log(props)
  return (
	<div className='home-center-main' style={{background:props.color}}>
		<div className='home-center'>
			{props.children}
			
		</div>
	</div>
  )
}

export default Center