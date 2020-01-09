import React from 'react'


const CopyRightFooter = () => {
  return (
    <>
      <div className="ref">CopyRightFooter.js</div>
      <div className="copyrightfooter">
        <p>
          &copy; {new Date().getFullYear()} All Right Reserved
        <a href="http://yellow-website.com" >Yellow-Website.com</a>
        </p>
      </div>
    </>
  )
}

export default CopyRightFooter
