import React from 'react'
import { useSelector } from 'react-redux'

const ProfileIcon = ({height}) => {
    const {user} = useSelector(state=>state.user);

    const style = {
      width:`${height}px`,
      height: `${height}px`,
      borderRadius: `50%`,
      border: `1px solid #ccc`,
      objectFit: "cover",
      cursor: "pointer",
    }
  return (
    <>
        <img style={style} src={user.pic} alt="profile pic" />
    </>
  )
}

export default ProfileIcon