import React from 'react'
import { Link } from 'react-router-dom';

const Apps = () => {



  return (

    <div className="apps">
      <h1>React Apps</h1>
      <ul>
        <li><Link to="/apps-redux-in-one-page" >Redux In One Page</Link></li>
        <li><Link to="/apps-Redux-Counter" >Counter [redux]</Link></li>
        <li><Link to="/apps-Redux-Todo" >App Todo [redux]</Link></li>
        <li><Link to="/apps-AddPost" >Add Post [useState]</Link></li>
        <li><Link to="/apps-AddPostRedux" >Add Post [redux]</Link></li>
      </ul>


    </div >

  )
}

export default Apps
