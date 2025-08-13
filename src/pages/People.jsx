import React from 'react'
import NavbarContainer from '../components/NavbarContainer'
import "../css/people.css"
import connectData from '../assets/connectData';
import ConnectCard from '../components/ConnectCard';

const People = () => {
  console.log(connectData);

  const space = {
    height: "10vh",
  }
  return (
    <>
      <NavbarContainer />
      <div className="people-wrapper">
        <div className="people-header">
          <h3>More Suggestions For You</h3>
        </div>

        <div className="people-body">
          {
            connectData.map((p, i) => (
              <div className="people" key={i}>
                <ConnectCard data={p} />
              </div>
            ))
          }
          {
            connectData.map((p, i) => (
              <div className="people" key={i}>
                <ConnectCard data={p} />
              </div>
            ))
          }
          {
            connectData.map((p, i) => (
              <div className="people" key={i}>
                <ConnectCard width='100%' data={p} />
              </div>
            ))
          }
        </div>
      </div>
      <div style={space}></div>
    </>
  )
}

export default People