import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar_container">
      <nav className="navbar bg-*">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand mb-0 h1">
            Jazz Flight Booking
          </Link>
          <div className="login_signup_buttons">
            <Link to={"/login"}>
              <input
                type={"button"}
                className="btn nav_buttons btn-sm"
                value={"Login"}
              />
            </Link>
            <Link to={"/signup"}>
              <input
                type={"button"}
                className="btn nav_buttons btn-sm"
                value={"Signup"}
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
