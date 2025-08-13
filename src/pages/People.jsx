import React, { useState } from 'react'
import NavbarContainer from '../components/NavbarContainer'


const People = () => {
  const [text, setText] = useState("");


  const space = {
    height: "10vh",
  }
  return (
    <>
      <NavbarContainer />
      <h1>People</h1>

      <textarea onChange={(e)=>setText(e.target.value)} style={{padding:"1rem", margin:"1rem"}} id="" rows="10"></textarea>

<p style={{padding:"1rem", margin:"1rem", whiteSpace: "pre-wrap"}}>{text}</p>
      <div style={space}></div>
    </>
  )
}

export default People