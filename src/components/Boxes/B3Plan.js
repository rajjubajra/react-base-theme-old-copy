import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const B3Plan = ({title, text, rate, period}) => {
  return (
    <div className="b3plan">

      <div className="icon">
        <FontAwesomeIcon icon={faCoffee} />
      </div>  
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="rate">
        <h1>{rate}</h1><span className="period">{period}</span>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="nav-btn">
        <button className="btn">Start</button>
      </div>

    </div>
  )
}

export default B3Plan
