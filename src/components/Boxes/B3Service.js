import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const B3Service = () => {
  return (
    <div className="b3service">
    <FontAwesomeIcon icon={faCoffee} />
    <h3>Services</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti dolor veritatis modi! .</p>
    <button className="btn">View</button>
    </div>
  )
}

export default B3Service
