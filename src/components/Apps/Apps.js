import React from 'react'
import { Link } from 'react-router-dom';

const Apps = () => {



  return (

    <div className="apps">
      <h1>React Apps</h1>
      <ul>
        <li><Link to="/apps-Redux-Counter" >Counter [redux]</Link></li>
        <li><Link to="/apps-Redux-Todo" >App Todo [redux]</Link></li>
      </ul>


    </div >

  )
}

export default Apps
