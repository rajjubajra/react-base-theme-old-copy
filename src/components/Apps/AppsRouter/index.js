import React from 'react'
import { Link } from 'react-router-dom';

const AppsRouter = () => {
  return (
    <ul>
      <li><Link to="/apps-redux-in-one-page" >Redux In One Page</Link></li>
      <li><Link to="/apps-redux-hook-in-one-page" >Redux/Hook In One Page</Link></li>
      <li><Link to="/apps-redux-lesson" >Redux Lesson</Link></li>
      <li><Link to="/apps-add-post" >Add Post [Hook]</Link></li>
      <li><Link to="/apps-add-post-class" >Add Post [Class]</Link></li>
      <li><Link to="/apps-todo-redux" >Todo App [Redux]</Link></li>
      <li><Link to="/apps-redux-shopping-cart" >Shopping Cart [Redux]</Link></li>
      <li><Link to="/app-axios">Axios Crash Course</Link></li>
    </ul>
  )
}

export default AppsRouter;