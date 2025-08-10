import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import ProfileIcon from '../components/ProfileIcon'
import CoverImage from '../components/CoverImage'
import ConnectCard from '../components/ConnectCard'
import connectData from '../assets/connectData'
import { NavLink } from 'react-router-dom'


const Settings = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="left-content">
          <div className="my-profile-card">

            <div className="cover-img-wrap">
              <CoverImage clsName={"my-card-cover"} />

              <div className="my-dp">
                <ProfileIcon height={90} />
              </div>
            </div>


            <div className="my-card-content">
              <h2>{user.fullName}</h2>
              <p>Be Yourself!</p>
              <p>India</p>
              <p>Chandigarh University</p>
            </div>

          </div>
        </div>

        <div className="middle-content"></div>

        <div className="right-content">
        
         {
          connectData.slice(6,8).map((cd)=> <ConnectCard data={cd} />)
        
         }
       

        </div>

      </div>
    </>
  )
}

export default Settings