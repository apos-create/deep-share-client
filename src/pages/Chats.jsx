import React from 'react'
import Navbar from '../components/Navbar'
import NavbarContainer from '../components/NavbarContainer'
// import UploadModal from '../components/UploadModel'

const Chats = () => {
  
  const space = {
    height:"10vh",
  }
  return (
    <>
    <NavbarContainer/>

    <h1>Chats Page</h1>

    {/* <UploadModal/> */}

    <div style={space}></div>
    </>
  )
}

export default Chats