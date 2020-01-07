import React from 'react'
import { Link } from 'react-router-dom';


const Categories = () => {

  return (
    <div className="categories">
      <ul>
        <li><Link to="/website">Website</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/navigation">Navigation</Link></li>
        <li><Link to="/boxes">Boxes</Link></li>
        <li><Link to="/calltoaction">Call to Action</Link></li>
        <li><Link to="/animation">Animation</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/headers">Headers</Link></li>
        <li><Link to="/">Testimonials</Link></li>
        <li><Link to="/">Entire Page</Link></li>
        <li><Link to="/">Features</Link></li>
        <li><Link to="/">Hero Items</Link></li>
        <li><Link to="/">Left/Right</Link></li>
        <li><Link to="/">Gallery</Link></li>
        <li><Link to="/">Store</Link></li>
        <li><Link to="/">Text</Link></li>
        <li><Link to="/">Video</Link></li>
        <li><Link to="/">Misc</Link></li>
      </ul>
    </div>
  )
}

export default Categories;


