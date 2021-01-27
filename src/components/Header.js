import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="topnav">
      <Link to="/">
        {/* <img src="" alt="logo" /> */}
        <span className="logo">Logo</span>
      </Link>
      <Link className="nav-signup nav-op" to="/signup">
        Sign Up
      </Link>
      <Link className="nav-signin nav-op" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
