import React from 'react';
import { useSelector } from 'react-redux';
import ProfileIcon from '../components/ProfileIcon'
import CoverImage from '../components/CoverImage';
import ConnectCard from '../components/ConnectCard';
import connectData from '../assets/connectData';
import postData from '../assets/postData';
import { NavLink } from 'react-router-dom'
import { x_unit_ago } from '../utils/x_unit_ago';
import NavbarContainer from '../components/NavbarContainer';
import "../css/home.css"


const Home = () => {
  const { user } = useSelector((state) => state.user);

  // console.log(postData);

  const space = {
    height:"10vh",
  }
  return (
    <>
      
<NavbarContainer/>

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

        <div className="middle-content">

          <div className="create-a-post">
            <div className="create-post-header">
              <ProfileIcon height={50} />
              <p>Create a post</p>
            </div>

            <hr />

            <div className="create-post-body">
              <button><i className="fa-solid fa-circle-play green-btn"></i> <span>Video</span>
              </button>
              <button><i className="fa-solid fa-image dgrbl-btn"></i> <span>Photo</span>  </button>
              <button><i className="fa-solid fa-newspaper orng-btn"></i> <span>Write article</span> </button>
            </div>
          </div>

          {
            postData.map((pd, i) => (
              <div className='post' key={i}>
                <div className="post-author">
                  <div className="author-details">
                    <div className="author-dp">
                      <img src={pd.author_pic} alt="image loading.." />
                    </div>

                    <div className="author-info">
                      <h3>{pd.author_name}</h3>
                      <p>{pd.author_bio}</p>
                      <p className='small'>{x_unit_ago(pd.posted_at)}</p>
                    </div>
                  </div>

                  <div className="post-actions">
                    <i className="fa-solid fa-ellipsis"></i>
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>

                <div className="post-info">
                  <p>{pd.post_content}</p>
                  <div className="post-img">
                    <img src={pd.post_img} alt="post_img_loading.." />
                  </div>
                </div>

                <div className="post-controls">
                  <button><i className="fa-solid fa-heart"></i> <span>{pd.likes}</span></button>
                  <button><i className="fa-solid fa-comment-dots"></i> <span>{pd.comments}</span></button>
                  <button><i className="fa-solid fa-share-nodes"></i> <span>{pd.share}</span></button>

                </div>
              </div>
            ))
          }
        </div>

        <div className="right-content">
          {
            connectData.slice(6, 8).map((cd, i) =>(<div className='home-suggestion'><ConnectCard key={i} data={cd} /></div>) )

          }
        </div>

      </div>

<div style={space}></div>
    </>
  )
}

export default Home