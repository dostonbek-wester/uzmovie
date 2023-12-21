import React, { useState } from 'react'
import './header.css'
import BuildIcon from '@mui/icons-material/Build';
import { HomeMaxSharp, Instagram, Settings } from '@mui/icons-material';
import {  Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
	const [open, setopen] = useState(false)
	let a = "Dev"
	return (
		<header className="header">
			<Drawer open={open} anchor='left' onClose={()=>setopen(false)}>
				<div style={{width:400}}>

					<BuildIcon />
					<HomeMaxSharp />
					<Instagram />
				</div>
			</Drawer>
			<img src="http://cdn.uzmovi.com/v1/images/logo.gif" alt="" />
			
			<nav>
				<div className='nav1'><NavLink className='text1' to='/'>BOSH SAHIFA</NavLink></div>
				<div className='nav2'><NavLink className='text1' to='/kinolar'>KINOLAR </NavLink></div>
				<div className='nav1'><NavLink className='text1' to='/seriallar'>SERIALLAR</NavLink></div>
				<div className='nav3'><NavLink className='text1' to='/janr'>JANR</NavLink></div>
				<div className='nav4'><NavLink className='text1' to='/yil'>YIL</NavLink></div>
				<div className='nav1'><NavLink className='text1' to='/mamlakat'>MAMLAKAT</NavLink></div>
				<div className='nav5'><NavLink className='text1' to='/kino yangilari'>KINO YANGILARI</NavLink></div>
			</nav>
			
		</header>
	)
}

export default Header
