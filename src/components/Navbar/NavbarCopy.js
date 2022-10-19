import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarCopy() {
  return (
    <div className="navbar_container">
      <nav className="navbar bg-*">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand mb-0 h1">
            Jazz Flight Booking
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCopy;
