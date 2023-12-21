import React from 'react'
import "./searchbar.css"
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ErrorIcon from '@mui/icons-material/Error';
import { IconButton } from '@mui/material';


function Searchbar() {
  return (

    <div className='search-container' style={{ height: 120 }}>
      <div className='searchbar-1'>
        <input className='search-inp' type="" placeholder='Film izlash...' />
      </div>
      <div className='searchbar-2'>
        <div className='search-icon'>
          <div className='icon-wrap'>
            <IconButton>
            <TheatersOutlinedIcon className='nav-menu-icons' />
          </IconButton>
          </div>
          <div className='icon-wrap'>  
            <IconButton>
            <MailOutlineIcon className='nav-menu-icons' />
          </IconButton>
          </div>
          <div className='icon-wrap'>  
            <IconButton>
            <BarChartOutlinedIcon className='nav-menu-icons' />
          </IconButton>
          </div>
          <div className='icon-wrap'>  
            <IconButton>
            <ErrorIcon className='nav-menu-icons' />
          </IconButton>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Searchbar