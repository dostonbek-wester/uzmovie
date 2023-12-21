import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'


const Card = ({ item }) => {
  const navigate = useNavigate()

  function ToDetail() {
    navigate('/detail', { state: item })
  }



  return (
    <div className='movie-card' onClick={ToDetail}>
      <button className='card-date'>{item.yili}</button>
      <img src={item.img} alt="" />
      <p className='card_p'>{item.title}</p>
    </div>
  )
}

export default Card




