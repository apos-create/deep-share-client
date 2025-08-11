import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import "../css/navbar.css"
import ProfileIcon from './ProfileIcon';

const Navbar = () => {
    const navigate = useNavigate();

    // handle logo click
    const handleLogoClick = () => {
        navigate('/feeds');
    }

    return (
        <div className='navbar'>

            <div className="left-navbar">
                <div className="logo" onClick={handleLogoClick}>
                    {/* <img src="https://image4.owler.com/logo/cover-whale-insurance_owler_20210607_142535_original.png" alt="DeepShare Logo" /> */}
               <h1>DeepShare</h1>
                </div>

                <div className="search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search here' />
                </div>
            </div>
 
            <div className="right-navbar">
                <NavLink to={'/feeds'}>
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to={'/people'}>
                    <i className="fa-solid fa-users"></i>
                    <span>People</span>
                </NavLink>
                <NavLink to={'/chats'}>
                    <i className="fa-solid fa-comments"></i>
                    <span>Chats</span>
                </NavLink>
                <NavLink to={'/notifications'}>
                    <i className="fa-solid fa-bell"></i>
                    <span>Notifications</span>
                </NavLink>
                <NavLink to={'/my-profile'}>
                    <ProfileIcon height={26}/>
                    <span>My Profile</span>
                </NavLink>
                <NavLink to={'/settings'}>
                    <i className="fa-solid fa-gear"></i>
                    <span>Setting</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar