import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  const style = { marginBottom: "-2px", marginRight: "2px" };

  return (
    <div className="nav-div">
      <nav className="navbar">
        <h1>Writing-React</h1>
        <div className="links">
          <div className="link-div">
            <Link to="/">
              <HiHome style={style} />
              Home
            </Link>
          </div>
          <Link to="/about">
            {" "}
            <FcAbout style={style} />
            About Me
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
