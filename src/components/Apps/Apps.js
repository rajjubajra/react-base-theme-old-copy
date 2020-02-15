import React from 'react'
import AppsRouter from './AppsRouter';
import CopyRightFooter from './CopyRightFooter';


const Apps = () => {

  return (
    <>
      <div className="apps">
        <h1>React Apps</h1>
        <AppsRouter />
      </div>
      <CopyRightFooter />
    </>
  )
}

export default Apps
