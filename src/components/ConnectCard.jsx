import React from 'react'
import "../css/connect-card.css"
import shortString from '../utils/short_string';


const ConnectCard = ({ data }) => {
    
    const style = {
        backgroundImage: `url(${data.coverImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "60px"
    }
    return (
        <div className='connect-card' >
            <div className="connect-card-head">
                <div style={style} className="connect-card-cover">
                    <div className="connect-card-dp">
                        <img src={data.pic} alt="" />
                    </div>
                </div>
            </div>
            <div className="connect-card-body">
                <h3>{data.fullName}</h3>
                <p>{ shortString(data.bio, 30) }</p>
                <p className='t12'>DeepShare Suggestion</p>
                <button><i className="fa-solid fa-user-plus"></i> Connect</button>
            </div>
        </div>
    )
}

export default ConnectCard