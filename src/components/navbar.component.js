import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../assets/css/navbar.css";
import logo from "../assets/image/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setToggle(false);
  }, [location]);
  return (
    <>
      <div className="navbar" id={toggle ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <div className="links">
          <NavLink to="/">
            <img src={logo} alt="" className="image" />
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
        </div>
      </div>
    </>
  );
};
export default NavBar;
