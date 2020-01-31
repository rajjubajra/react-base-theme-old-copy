import React from 'react'
import { Link } from 'react-router-dom';

const AppsRouter = () => {
  return (
    <ul>
      <li><Link to="/apps-redux-in-one-page" >Redux In One Page</Link></li>
      <li><Link to="/apps-add-post" >Add Post [Hook]</Link></li>
      <li><Link to="/apps-add-post-class" >Add Post [Class]</Link></li>
    </ul>
  )
}

export default AppsRouter;
