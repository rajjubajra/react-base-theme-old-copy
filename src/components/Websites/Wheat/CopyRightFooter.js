import React from 'react'
import { Link } from 'react-router-dom'


const CopyRightFooter = () => {
  return (
    <>
      <div className="copyrightfooter">
        <p>
          &copy; {new Date().getFullYear()} All Right Reserved
        <a href="http://yellow-website.com" >Yellow-Website.com</a><Link to="/">+</Link>
        </p>
      </div>
    </>
  )
}

export default CopyRightFooter
