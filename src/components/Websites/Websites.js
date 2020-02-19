import React from 'react'
import { Link } from 'react-router-dom'


const Websites = () => {

  return (
    <>
      <h1>WEBsites</h1>
      <div className="websites">
        <div>
          <h3>Lotus</h3>
          <Link className="btn-small-wide" to="/lotus" >Preview</Link>
        </div>
        <div>
          <h3>Wheat</h3>
          <Link className="btn-small-wide" to="/wheat">Preview</Link>
        </div>
        <div>
          <h3>Lan Pasaa</h3>
          <Link className="btn-small-wide" to="/lanpasaa">Preview</Link>
        </div>
        <div>
          <h3>Bamboo</h3>
          <Link className="btn-small-wide" to="#">Preview</Link>
        </div>
        <div>
          <h3>Herbs</h3>
          <Link className="btn-small-wide" to="#">Preview</Link>
        </div>
        <div>
          <h3>Curry</h3>
          <Link className="btn-small-wide" to="#">Preview</Link>
        </div>
      </div>

    </>
  )
}

export default Websites
