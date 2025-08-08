import React from 'react'
import '../css/loader.css'
const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader-content">
            <img src="https://image4.owler.com/logo/cover-whale-insurance_owler_20210607_142535_original.png" alt="Loading" />
        </div>

        <div className="loader-line">
            <div className="moving-bar"></div>
        </div>
    </div>
  )
}

export default Loader