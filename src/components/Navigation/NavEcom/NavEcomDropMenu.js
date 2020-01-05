import React from "react";
import { Link } from "react-router-dom";

const NavEcomDropMenu = () => {
  return (
    <ul className="nav-ecom-dropdwon">
      <h4>Shop Offer</h4>
      <li>
        <Link to="#">Home and Garden Offer</Link>
      </li>
      <li>
        <Link to="#">Womanswear Offer</Link>
      </li>
      <li>
        <Link to="#">Menswear Offer</Link>
      </li>
    </ul>
  );
};

export default NavEcomDropMenu;
