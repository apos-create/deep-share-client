import React from 'react';
import Navbar from '../components/Navbar';
import ProfileIcon from '../components/ProfileIcon';
import CoverImage from '../components/CoverImage';


const Home = () => {
  return (
    <>
     <Navbar />
    
    <h1>Home</h1>

    <ProfileIcon height={50}/>
    <CoverImage clsName="cover-image" />
    </>
  )
}

export default Home