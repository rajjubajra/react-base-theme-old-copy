import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const B3Price = ({ title, text, rate, period, item_1, item_2, item_3, item_4 }) => {
  return (
    <div className="b3price">

      <div className="icon">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="rate">
        <h1>{rate}</h1><span className="period">{period}</span>
      </div>
      <div className="items">
        <ul>
          <li>{item_1}</li>
          <li>{item_2}</li>
          <li>{item_3}</li>
          <li>{item_4}</li>
        </ul>
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

export default B3Price
