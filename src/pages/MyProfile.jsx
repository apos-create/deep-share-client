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
    height:"10vh",
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
            <h1>{user.fullName}</h1>
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
          <p>
            A Lifelong Learner
            Pursuing BCA with passion.
            Doing MERN stack projects.
            Let's connect, collaborate and contribute.…
          </p>
        </div>

        <div className="posts">
          <div className="posts-header">
            <h3>Posts</h3>
            <div>
              <button className="create-post-button">Create a post</button>
              <button><i className="fa-solid fa-pen"></i></button>
            </div>
          </div>
        </div>

        <div className="parent-wrapper">
          <div className="child-wrapper">
            <div className="child-header">
            <h3>Experience</h3>
            <button><i className="fa-solid fa-pen"></i></button>

            </div>
            <button className="add-experience-button">Add experience</button>
          </div>
        </div>

        <div className="parent-wrapper">
          <div className="child-wrapper">
            <h3>Education</h3>

            <button className="add-education-button"><i className="fa-solid fa-plus"></i></button>
            <button className='edit-education-button'><i className="fa-solid fa-pen"></i></button>
          </div>

        </div>

        <div className="parent-wrapper">
          <div className="child-wrapper">
            <h3>Skills</h3>
            <button className='add-skills-button'>Add Skills</button>
            <button><i className="fa-solid fa-pen"></i></button>
          </div>
        </div>
      </div>


<div style={space}></div>
    </>
  )
}

export default MyProfile