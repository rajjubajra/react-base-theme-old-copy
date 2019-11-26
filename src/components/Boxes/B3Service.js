import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const B3Service = ({title, text}) => {
  return (
    <div className="b3service">

      <div className="icon">
        <FontAwesomeIcon icon={faCoffee} />
      </div>  
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="nav-btn">
        <button className="btn">View</button>
      </div>

    </div>
  )
}

export default B3Service
