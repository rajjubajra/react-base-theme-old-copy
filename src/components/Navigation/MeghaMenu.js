import React from 'react'
import { Link } from 'react-router-dom';


const MeghaMenu = () => {


  return (

    <div className="dropDownNav" >
      <div>
        <ul className="list">
          <li className="submenu">
            <Link to="#">Websites</Link>
            <div className="submenu">
              <ul className="submenu-lists">
                <li><Link to="/websites">Websites [Custom CSS]</Link></li>
                <li><Link to="/websites-bootstrap">Websites [Bootstrap 4]</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/columns">Columns</Link></li>
          <li><Link to="/boxes">Boxes</Link></li>
          <li><Link to="/Apps">Apps</Link></li>
          <li><Link to="/carousel">Carousel</Link></li>
          <li><Link to="/calltoaction">Hero</Link></li>
          <li><Link to="#">Headers</Link></li>
          <li className="submenu">
            <Link to="#">Page</Link>
            <div className="submenu">
              <ul className="submenu-lists">
                <li><Link to="/iframe">IFrame</Link></li>
                <li><Link to="/homepage">Home Page</Link></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="#">FAQ</Link></li>
                <li><Link to="#">Features</Link></li>
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Gallery</Link></li>
                <li><Link to="#">Help</Link></li>
                <li><Link to="#">Our Team</Link></li>
                <li><Link to="#">News</Link></li>
                <li><Link to="#">Error 404</Link></li>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to="#">Under Construction</Link></li>
                <li><Link to="#">Blank Page</Link></li>
              </ul>
            </div>
          </li>
          <li className="submenu">
            <Link to="#">Misc</Link>
            <div className="submenu">
              <ul className="submenu-lists" >
                <h4>Boxes</h4>
                <li><Link to="/columns">Columns</Link></li>
                <li><Link to="/boxes">Box</Link></li>
                <li><Link to="#">Article</Link></li>
                <li><Link to="#">Zoom</Link></li>
                <li><Link to="#">Trailer</Link></li>
                <li><Link to="#">Story</Link></li>
                <li><Link to="#">Slidding</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
                <li><Link to="#">Promo</Link></li>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to="#">Photo</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
                <li><Link to="#">Icon</Link></li>
                <li><Link to="#">Hover</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
                <li><Link to="#">Features</Link></li>
                <li><Link to="#">Counter</Link></li>
                <li><Link to="#">Countdown</Link></li>
                <li><Link to="#">Chart</Link></li>
                <li><Link to="#">Before After Effect</Link></li>
                <li><Link to="#">Quick Fact</Link></li>
              </ul>
              <ul className="submenu-lists" >
                <h4>Small Blocks</h4>
                <li><Link to="#">Alert</Link></li>
                <li><Link to="#">Typography</Link></li>
                <li><Link to="#">Icons</Link></li>
                <li><Link to="#">Buttons</Link></li>
                <li><Link to="/social-media">Social Media</Link></li>
                <li><Link to="#">List and Bullets</Link></li>
              </ul>
              <ul className="submenu-lists" >
                <h4>Contents</h4>
                <li><Link to="/navigation">Navigations</Link></li>
                <li><Link to="/headers">Headers</Link></li>
                <li><Link to="/footers">Footer</Link></li>
                <li><Link to="#">Accordion</Link></li>
                <li><Link to="#">Helper</Link></li>
                <li><Link to="#">List</Link></li>
                <li><Link to="#">Buttons</Link></li>
                <li><Link to="/social-media">Social Media</Link></li>
                <li><Link to="#">List and Bullets</Link></li>
                <li><Link to="#">Timeline</Link></li>
                <li><Link to="/animation">Animation</Link></li>
                <li><Link to="/imageslider">Image Slider</Link></li>
              </ul>
              <ul className="submenu-lists" >
                <h4>Code Reference</h4>
                <li><Link to="/hooks">Hooks</Link></li>
              </ul>
            </div>
          </li>
          <li className="submenu">
            <Link to="#">Blog</Link>

            <div className="submenu">
              <ul className="submenu-lists" >
                <li><Link to="#">Regular</Link></li>
                <li><Link to="#">Timeline</Link></li>
                <li><Link to="#">Photo</Link></li>
                <li><Link to="#">Blockquote</Link></li>
                <li><Link to="#">Post with Youtube</Link></li>
                <li><Link to="#">Post with slidder</Link></li>
                <li><Link to="#">Post with Photo</Link></li>
              </ul>
            </div>

          </li>
          <li className="submenu">
            <Link to="#">Shop</Link>

            <div className="submenu">
              <ul className="submenu-lists" >
                <li><Link to="#">1 Column Grid</Link></li>
                <li><Link to="#">2 Column Grid</Link></li>
                <li><Link to="#">4 Column Grid</Link></li>
                <li><Link to="#">4 Column Grid</Link></li>
                <li><Link to="#">Single Product</Link></li>
                <li><Link to="#">Cart</Link></li>
                <li><Link to="#">Checkout</Link></li>
              </ul>
            </div>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default MeghaMenu
