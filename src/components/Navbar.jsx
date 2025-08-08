import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import "../css/navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>



            <div className="left-navbar">
                <div className="logo">
                    <img src="https://t3.ftcdn.net/jpg/01/39/63/94/360_F_139639477_56w1dz3qNqCWlVEJvnXMjjs8qNHmQxTM.jpg" alt="DeepShare Logo" />
                </div>
            </div>
            <ul className="nav-items">
                <div className="nav-item">
                    <NavLink>
                        <i class="fa-solid fa-home"></i>
                        <span>Home</span>
                    </NavLink>
                </div>
            </ul>
        </div>
    )
}

export default Navbar