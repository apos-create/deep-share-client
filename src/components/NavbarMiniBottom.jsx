import React from 'react'

const NavbarMiniBottom = () => {
    return (
        <div className='navbar-mini-bottom'>
            <NavLink to={'/feeds'}>
                <i className="fa-solid fa-house"></i>
            </NavLink>

            <NavLink to={'/people'}>
                <i className="fa-solid fa-users"></i>
            </NavLink>

            <NavLink to={'/chats'}>
                <i className="fa-solid fa-comments"></i>
            </NavLink>

            <NavLink to={'/notifications'}>
                <i className="fa-solid fa-bell"></i>
            </NavLink>

            <NavLink to={'/my-profile'}>
                <ProfileIcon height={26} />
            </NavLink>
        </div>
    )
}

export default NavbarMiniBottom