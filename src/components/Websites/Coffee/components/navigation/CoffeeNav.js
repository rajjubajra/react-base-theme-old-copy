import React from 'react'
import { Link } from 'react-router-dom';

const mainnav = [
  {
    id: 1,
    name: "Menu",
    path: "food-menu",
    status: 0
  },
  {
    id: 2,
    name: "Our Story",
    path: "our-story",
    status: 0
  },
  {
    id: 3,
    name: "Blogs",
    path: "blogs",
    status: 0
  },
  {
    id: 4,
    name: "Contact",
    path: "contact",
    status: 0
  },
]

const CoffeeNav = () => {
  return (
    <div className="coffee-nav">
      <div className="coffee-logo">
        <div className="logo"></div>
      </div>
      <div className="nav">
        <ul className="desktop-nav">
          {
            mainnav.map((item, index) => {
              return (<li key={index}><Link to={item.path}>{item.name}</Link></li>)
            })
          }
        </ul>
        <ul className="mobile-nav">
          {
            mainnav.map((item, index) => {
              return (<li><Link to={item.path}>{item.name}</Link></li>)
            })
          }
        </ul>
      </div>
      <div className="social">

      </div>

    </div>
  )
}

export default CoffeeNav
