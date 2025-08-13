import React from 'react'
import "../css/my-profile.css"


import { useSelector } from 'react-redux'
import NavbarContainer from '../components/NavbarContainer';

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  const style = {
    backgroundImage: `url(${user.coverImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  const space = {
    height: "10vh",
  }
  return (
    <>
      <NavbarContainer />
      <div className="my-profile">
        <div className="profile-header">
          <div style={style} className="profile-cover">
            <div className="profile-pic">
              <img src={user.pic} alt="" />
            </div>

            <button className="update-cover-button"><i className="fa-solid fa-pen"></i></button>
          </div>

          <div className="profile-info">
            <h2>{user.fullName}</h2>
            <p> Get 1% Better Everyday | JavaScript Developer | Looking For MERN
              Stack Project Collaboration</p>
            <p>India</p>

            <button className="update-profile-info"><i className="fa-solid fa-pen"></i></button>
          </div>
        </div>

        <div className="about">
          <div className="about-header">
            <h3>About</h3>
            <button className="edit-about-button"><i className="fa-solid fa-pen"></i></button>
          </div>
          <hr />
          <p style={{ whiteSpace: "pre-wrap", fontSize: "14px" }}>
            A Lifelong Learner <br />
            Pursuing BCA with passion. <br />
            Doing MERN stack projects. <br />
            Let's connect, collaborate and contribute.…
          </p>
        </div>

        <div className="posts">
          <div className="posts-header">
            <h3>Posts</h3>
            <div>
              <span className="create-post-button">Create a post</span>
              <button><i className="fa-solid fa-pen"></i></button>
            </div>
          </div>
          <hr />
          <div className="posts-wrapper">

          </div>
        </div>

        <div className="parent-wrapper">
          <div className="child-wrapper">
            <div className="child-header">
              <h3>Experience</h3>
              <button><i className="fa-solid fa-pen"></i></button>
            </div>
            <hr />

            <div className="child-body">
              <button className="add-experience-button"><i className="fa-solid fa-plus"></i> Add experience</button>
            </div>
          </div>
        </div>

        <div className="parent-wrapper">
          <div className="child-wrapper">
            <div className="child-header">
              <h3>Education</h3>
              <button className='edit-education-button'><i className="fa-solid fa-pen"></i></button>
            </div>
            <hr />
            <div className="child-body">
              <button className="add-education-button"><i className="fa-solid fa-plus"></i> Add Education</button>
            </div>


          </div>

        </div>

        <div className="parent-wrapper">
          <div className="child-wrapper">
            <div className="child-header">
              <h3>Skills</h3>
              <button><i className="fa-solid fa-pen"></i></button>
            </div>

            <hr />

            <div className="child-body">
              <button className='add-skills-button'><i className="fa-solid fa-plus"></i> Add Skills</button>
            </div>


          </div>
        </div>
      </div>


      <div style={space}></div>
    </>
  )
}

export default MyProfile