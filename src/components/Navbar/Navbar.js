import React from 'react'
import './Navbar.css'
import logo from '../../assets/Screenshot_2024-11-03_111149-removebg-preview.png'
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo}  alt="logo" className='logo'/>
        <div className='desktopMenu'>
         <Link className='desktopMenuListItem'>Home</Link>
         <Link className='desktopMenuListItem'>About</Link>
         <Link className='desktopMenuListItem'>Portfolio</Link>
         <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
          <p><i class="fa-thin fa-message-arrow-down"/>Contact Me</p>
        </button>
    </nav>
  )
}

export default Navbar
