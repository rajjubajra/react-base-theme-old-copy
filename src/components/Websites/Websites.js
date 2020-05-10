import React from 'react'
import { Link } from 'react-router-dom'


const Websites = () => {

  return (
    <>
      <h1 style={{ textAlign: "center" }}>WEBSITES</h1>
      <div className="websites">
        <div>
          <h3>Dark Mode</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Illustration</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Video Heros</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Micro Interactions</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>3D Elements</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Geometric Shapes</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Black and White</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Massive Bold Fonts</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
        <div>
          <h3>Trandy Colour Scheme</h3>
          <Link className="btn-small-wide" to="/" >Preview</Link>
        </div>
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
          <h3>Coffee</h3>
          <Link className="btn-small-wide" to="coffee">Preview</Link>
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
        <div>
          <h3>Search Recipes</h3>
          <h5>Apps</h5>
          <Link className="btn-small-wide" to="search-recipes">Preview</Link>
        </div>
        <div>
          <h3>Covid-19</h3>
          <h5>Apps</h5>
          <Link className="btn-small-wide" to="covid">Preview</Link>
        </div>
        <div>
          <h3>Live stream</h3>
          <h5>Apps</h5>
          <Link className="btn-small-wide" to="live-stream">Preview</Link>
        </div>
      </div>

    </>
  )
}

export default Websites
