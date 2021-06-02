import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="menu">
        <Link to="/">
          <li className="menu-item">Home</li>
        </Link>
        <Link to="/add">
          {" "}
          <li className="menu-item">Add Movie</li>
        </Link>
        <Link to="/login">
          {" "}
          <li className="menu-item">Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
