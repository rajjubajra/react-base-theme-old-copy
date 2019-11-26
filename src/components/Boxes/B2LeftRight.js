import React from 'react'
import B2LeftRight_1 from './B2LeftRight_1'
import B2LeftRight_2s from './B2LeftRight_2s'


const B2LeftRight = () => {
  return (
    <>
      <h2>B2LeftRight</h2>
      <div className="b2leftright">
        <div className="left-block">
          <B2LeftRight_1 />
        </div>
        <div className="right-block">
          <B2LeftRight_2s />
        </div>
      </div>

    </>
  )
}

export default B2LeftRight
