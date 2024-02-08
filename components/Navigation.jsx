import React from "react";
import "../styles/navigation.scss";
import { Link as Link } from "react-router-dom";

function Navigation() {
  return (
    <ul className="top-nav">
      <Link to={"/"} className="nav-router-link">
        HOME
      </Link>
      <Link to={"/gallery"} className="nav-router-link">
        GALLERY
      </Link>
      <Link to={"/contact"} className="nav-router-link">
        CONTACT
      </Link>
    </ul>
  );
}

export default Navigation;
