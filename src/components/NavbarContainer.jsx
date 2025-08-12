import React from 'react'
// import useScrollUp from '../hooks/useScrollUp'
import useScreenSize from '../hooks/useScreenSize';
import Navbar from './Navbar';
import NavbarMiniBottom from './NavbarMiniBottom';
import NavbarMiniTop from './NavbarMiniTop';

const NavbarContainer = () => {
    // const isUp = useScrollUp();
    const screenSize = useScreenSize();
    let small = screenSize.width < 768;
    const style = {
        width:"100%",
        height: "10vh"
    };

    return (
        <>
            {
                small ? (
                    <>
                        <NavbarMiniTop />
                        <NavbarMiniBottom />
                        <div style={style}></div>
                    </>
                ) : (
                    <Navbar />
                )
            }
        </>
    )
}

export default NavbarContainer