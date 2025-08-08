import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
       <ul className='nav-items'>
        <li className='nav-item'>
            <NavLink>
               <img src="https://t3.ftcdn.net/jpg/01/39/63/94/360_F_139639477_56w1dz3qNqCWlVEJvnXMjjs8qNHmQxTM.jpg" alt="" />
            </NavLink>
        </li>
        <li className='nav-item'>
            <NavLink>
               <i class="fa-solid fa-magnifying-glass"></i>
               <span></span>
            </NavLink>
        </li>
       </ul>
    </div>
  )
}

export default Navbar