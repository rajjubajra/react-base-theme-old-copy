import React from 'react'
import B2LeftRightA from './B2LeftRightA'
import B2LeftRightBs from './B2LeftRightBs'


const B2LeftRight = () => {
  return (
    <>
      <div className="ref">B2LeftRight.js and B2LeftRightA.js and B2LeftRightBs.js</div>
      <h2>B2LeftRight</h2>
      <div className="b2leftright">
        <div className="left-block">
          <B2LeftRightA />
        </div>
        <div className="right-block">
          <B2LeftRightBs />
        </div>
      </div>

    </>
  )
}

export default B2LeftRight
