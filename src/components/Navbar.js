import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <div className="sum">
      <div className="logo">GE Rocket Booking</div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/OurTeam">Our Team</Link>
          </li>
          <li>
            <Link to="/Reserve">Reserve</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
