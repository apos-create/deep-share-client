import React from 'react'
import { useSelector } from 'react-redux'
import "../css/cover-image.css"

const CoverImage = ({clsName}) => {
    const {user} = useSelector(state=>state.user);

   const style = {
     backgroundImage: `url(${user.coverImage})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    
   }
  return (
    <div className={clsName} style={style}></div>
  )
}

export default CoverImage