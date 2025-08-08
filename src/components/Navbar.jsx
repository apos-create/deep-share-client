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

                <div className="search-box">
                    <input type="text" placeholder='Search here' />
                </div>
            </div>

            <div className="right-navbar">
                <NavLink to={'/'}>
                    <span>Home</span>
                </NavLink>
                <NavLink to={'/people'}>
                    <span>People</span>
                </NavLink>
                <NavLink to={'/notifications'}>
                    <span>Notifications</span>
                </NavLink>
                <NavLink to={'/my-profile'}>
                    <span>My Profile</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar