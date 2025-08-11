import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  const style = {
    backgroundImage: `url(${user.coverImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  return (
    <>
      <Navbar />
      <div className="my-profile">
        <div className="profile-header">
          <div style={style} className="profile-cover">
            <div className="profile-pic">
              <img src={user.pic} alt="" />
            </div>

            <button className="update-cover-button">Update Cover</button>
          </div>

          <div className="profile-info">
            <h1>{user.fullName}</h1>
            <p> Get 1% Better Everyday | JavaScript Developer | Looking For MERN
              Stack Project Collaboration</p>
            <p>India</p>

            <button className="update-profile-info">Edit Profile</button>
          </div>
        </div>

        <div className="about">
          <h3>About</h3>
          <p>
            A Lifelong Learner
            Pursuing BCA with passion.
            Doing MERN stack projects.
            Let's connect, collaborate and contribute.…
          </p>
          <button className="edit-about-button">Edit about</button>
        </div>

        <div className="posts">
          <div className="posts-header">

            <h3>Posts</h3>
            <button className="create-post-button">Create a post</button>
          </div>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <button className="add-experience-button">Add experience</button>
        </div>

        <div className="education">
          <h3>Education</h3>

          <button className="add-education-button">Add</button>
          <button className='edit-education-button'>Edit</button>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <button className='add-skills-button'>Add Skills</button>
        </div>
      </div>

    </>
  )
}

export default MyProfile