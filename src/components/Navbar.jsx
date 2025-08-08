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
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search here' />
                </div>
            </div>

            <div className="right-navbar">
                <NavLink to={'/'}>
                <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to={'/people'}>
                <i className="fa-solid fa-users"></i>
                    <span>People</span>
                </NavLink>
                <NavLink to={'/notifications'}>
                <i className="fa-solid fa-bell"></i>
                    <span>Notifications</span>
                </NavLink>
                <NavLink to={'/my-profile'}>
                <i className="fa-solid fa-circle-user"></i>
                    <span>My Profile</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar