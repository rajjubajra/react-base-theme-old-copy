import React from 'react'
import { Link } from 'react-router-dom'


const CopyRightFooter = () => {
  const copyrightStyle = {
    textAlign: "center",
    width: "100%",
    fontFamily: "sans-serif",
    fontSize: "11px"
  }

  const weblink = {
    textDecoration: "none",
    color: "#000"
  }
  return (
    <>
      <div style={copyrightStyle}>
        <p>
          &copy; {new Date().getFullYear()}
          All Right Reserved | Desinged and developed by
          <a href="http://yellow-website.com" style={weblink} >Yellow-Website.com</a>
          <Link to="/" style={weblink}>+</Link>
        </p>
      </div>
    </>
  )
}

export default CopyRightFooter
